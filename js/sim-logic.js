/*
 * 論理回路シミュレーター
 *
 * 他のシミュレーターと違い、再生ボタンで1ステップずつ進める形ではない。
 * 入力スイッチかゲートを操作するたびに、回路全体を計算し直して描き直す。
 * 状態は inputs（A・B・C の 0/1）と gates（各スロットに入れたゲート）だけ。
 */
(function () {
  'use strict';

  /** ゲートの定義。calc は 0/1 を返す。 */
  const GATES = {
    AND: { label: 'AND', arity: 2, calc: (a, b) => (a && b ? 1 : 0), op: 'かつ' },
    OR: { label: 'OR', arity: 2, calc: (a, b) => (a || b ? 1 : 0), op: 'または' },
    NOT: { label: 'NOT', arity: 1, calc: (a) => (a ? 0 : 1), op: 'でない' },
    XOR: { label: 'XOR', arity: 2, calc: (a, b) => (a !== b ? 1 : 0), op: '排他的または' },
    NAND: { label: 'NAND', arity: 2, calc: (a, b) => (a && b ? 0 : 1), op: 'かつ の否定' },
    NOR: { label: 'NOR', arity: 2, calc: (a, b) => (a || b ? 0 : 1), op: 'または の否定' },
  };

  const GATE_ORDER = ['AND', 'OR', 'NOT', 'XOR', 'NAND', 'NOR'];

  /* 回路の種類。inputs は使う入力ピン、slots は選べるゲートの数。 */
  const PRESETS = {
    single: { pins: ['A', 'B'], slots: 1, outputs: ['出力'] },
    combo: { pins: ['A', 'B', 'C'], slots: 3, outputs: ['出力'] },
    half: { pins: ['A', 'B'], slots: 0, outputs: ['S（和）', 'C（桁上がり）'] },
  };

  const state = {
    preset: 'single',
    inputs: { A: 0, B: 1, C: 1 },
    gates: ['AND', 'NOT', 'OR'],
  };

  const el = {};

  /* ---------------- 計算 ---------------- */

  /** ゲート1つ分の値を出す。NOT のときは第1入力だけを使う。 */
  function applyGate(name, a, b) {
    const gate = GATES[name];
    if (!gate) return 0;
    return gate.arity === 1 ? gate.calc(a) : gate.calc(a, b);
  }

  /**
   * 与えられた入力で回路全体を計算する。
   * 真理値表を作るときにも同じ関数を使うので、state ではなく引数を受け取る。
   */
  function evaluate(inputs) {
    const a = inputs.A;
    const b = inputs.B;
    const c = inputs.C;

    if (state.preset === 'single') {
      const out = applyGate(state.gates[0], a, b);
      return { g: [out], out: [out] };
    }

    if (state.preset === 'half') {
      const s = applyGate('XOR', a, b);
      const carry = applyGate('AND', a, b);
      return { g: [s, carry], out: [s, carry] };
    }

    // combo: ①=A,B ②=C（1入力扱い）または B,C ③=①,②
    const g1 = applyGate(state.gates[0], a, b);
    const g2 = applyGate(state.gates[1], c, b);
    const g3 = applyGate(state.gates[2], g1, g2);
    return { g: [g1, g2, g3], out: [g3] };
  }

  /* ---------------- 回路図の描画 ---------------- */

  function wire(points, bit) {
    return `<polyline class="sim-logic-wire" data-bit="${bit}" points="${points}"></polyline>`;
  }

  function bitLabel(x, y, bit) {
    return `<text class="sim-logic-bit-label" data-bit="${bit}" x="${x}" y="${y}">${bit}</text>`;
  }

  function pin(x, y, name, bit) {
    return (
      `<text class="sim-logic-pin-label" x="${x}" y="${y + 4}">${name}</text>` +
      `<circle class="sim-logic-node" data-bit="${bit}" cx="${x + 16}" cy="${y}" r="4"></circle>`
    );
  }

  function gateBox(x, y, label, active) {
    return (
      `<rect class="sim-logic-gate-box" data-active="${active}" x="${x}" y="${y - 16}" ` +
      `width="58" height="32" rx="6"></rect>` +
      `<text class="sim-logic-gate-text" x="${x + 29}" y="${y + 4}">${label}</text>`
    );
  }

  function outLamp(x, y, bit, caption) {
    return (
      `<circle class="sim-logic-out-fill" data-bit="${bit}" cx="${x}" cy="${y}" r="13"></circle>` +
      `<circle class="sim-logic-out-ring" data-bit="${bit}" cx="${x}" cy="${y}" r="13"></circle>` +
      `<text class="sim-logic-out-text" data-bit="${bit}" x="${x}" y="${y + 5}">${bit}</text>` +
      (caption
        ? `<text class="sim-logic-pin-label" x="${x - 14}" y="${y + 32}">${caption}</text>`
        : '')
    );
  }

  function drawSingle(v) {
    const a = state.inputs.A;
    const b = state.inputs.B;
    const name = state.gates[0];
    const oneInput = GATES[name].arity === 1;

    let svg = '';
    svg += pin(10, 34, 'A', a);
    svg += wire('30,34 92,34 92,26 112,26', a);
    svg += bitLabel(52, 28, a);

    svg += pin(10, 86, 'B', b);
    if (oneInput) {
      // NOT は B を使わない。線をつながず、使っていないことを見せる。
      svg += `<text class="sim-logic-bit-label" x="42" y="90">未使用</text>`;
    } else {
      svg += wire('30,86 92,86 92,74 112,74', b);
      svg += bitLabel(52, 80, b);
    }

    svg += gateBox(112, 50, name, 'true');
    svg += wire('170,50 214,50', v.out[0]);
    svg += bitLabel(184, 44, v.out[0]);
    svg += outLamp(232, 50, v.out[0], '');

    return `<svg class="sim-logic-stage" viewBox="0 0 264 110" role="img"
      aria-label="入力A=${a}、入力B=${b}、${name}ゲートを通した出力は${v.out[0]}">${svg}</svg>`;
  }

  function drawCombo(v) {
    const a = state.inputs.A;
    const b = state.inputs.B;
    const c = state.inputs.C;
    const g2Name = state.gates[1];
    const g2One = GATES[g2Name].arity === 1;

    let svg = '';
    // 入力
    svg += pin(6, 26, 'A', a);
    svg += pin(6, 62, 'B', b);
    svg += pin(6, 122, 'C', c);

    // ①（A・B）
    svg += wire('26,26 60,26 60,26 78,26', a);
    svg += wire('26,62 60,62 60,42 78,42', b);
    svg += gateBox(78, 34, state.gates[0], 'true');
    svg += bitLabel(40, 20, a);
    svg += bitLabel(40, 56, b);

    // ②（C、2入力ゲートなら B も使う）
    svg += wire('26,122 60,122 60,114 78,114', c);
    if (!g2One) {
      svg += wire('26,62 44,62 44,130 78,130', b);
    }
    svg += gateBox(78, 122, g2Name, 'true');
    svg += bitLabel(40, 116, c);

    // ③（①・②）
    svg += wire('136,34 158,34 158,70 176,70', v.g[0]);
    svg += wire('136,122 158,122 158,86 176,86', v.g[1]);
    svg += bitLabel(140, 28, v.g[0]);
    svg += bitLabel(140, 116, v.g[1]);
    svg += gateBox(176, 78, state.gates[2], 'true');

    svg += wire('234,78 262,78', v.out[0]);
    svg += outLamp(282, 78, v.out[0], '');

    return `<svg class="sim-logic-stage" viewBox="0 0 310 160" role="img"
      aria-label="A=${a}、B=${b}、C=${c}。①=${v.g[0]}、②=${v.g[1]}、出力=${v.out[0]}">${svg}</svg>`;
  }

  function drawHalf(v) {
    const a = state.inputs.A;
    const b = state.inputs.B;

    let svg = '';
    svg += pin(6, 34, 'A', a);
    svg += pin(6, 96, 'B', b);

    // XOR → S
    svg += wire('26,34 56,34 56,28 96,28', a);
    svg += wire('26,96 66,96 66,44 96,44', b);
    svg += gateBox(96, 36, 'XOR', 'true');
    svg += wire('154,36 188,36', v.out[0]);
    svg += outLamp(206, 36, v.out[0], 'S');

    // AND → C
    svg += wire('26,34 46,34 46,104 96,104', a);
    svg += wire('26,96 56,96 56,120 96,120', b);
    svg += gateBox(96, 112, 'AND', 'true');
    svg += wire('154,112 188,112', v.out[1]);
    svg += outLamp(206, 112, v.out[1], 'C');

    return `<svg class="sim-logic-stage" viewBox="0 0 240 155" role="img"
      aria-label="半加算器。A=${a}、B=${b}、和S=${v.out[0]}、桁上がりC=${v.out[1]}">${svg}</svg>`;
  }

  function drawCircuit(v) {
    if (state.preset === 'single') return drawSingle(v);
    if (state.preset === 'half') return drawHalf(v);
    return drawCombo(v);
  }

  /* ---------------- 式 ---------------- */

  function exprText(v) {
    const a = state.inputs.A;
    const b = state.inputs.B;
    const c = state.inputs.C;

    if (state.preset === 'single') {
      const name = state.gates[0];
      const body =
        GATES[name].arity === 1
          ? `NOT ${a}`
          : `${a} ${name} ${b}`;
      return `${body}  =  <strong>${v.out[0]}</strong>`;
    }

    if (state.preset === 'half') {
      return (
        `S = ${a} XOR ${b} = <strong>${v.out[0]}</strong>` +
        `　　C = ${a} AND ${b} = <strong>${v.out[1]}</strong>`
      );
    }

    const n1 = state.gates[0];
    const n2 = state.gates[1];
    const n3 = state.gates[2];
    const part1 = `(${a} ${n1} ${b})`;
    const part2 = GATES[n2].arity === 1 ? `(NOT ${c})` : `(${c} ${n2} ${b})`;
    return `${part1} ${n3} ${part2} = ${v.g[0]} ${n3} ${v.g[1]} = <strong>${v.out[0]}</strong>`;
  }

  /* ---------------- 真理値表 ---------------- */

  function truthRows() {
    const preset = PRESETS[state.preset];
    const pins = preset.pins;
    const rows = [];
    const total = 1 << pins.length;

    for (let i = 0; i < total; i += 1) {
      const inputs = { A: 0, B: 0, C: 0 };
      pins.forEach((name, index) => {
        // 上位ビットから順に割り当てて、000 → 001 → 010 … の並びにする
        inputs[name] = (i >> (pins.length - 1 - index)) & 1;
      });
      rows.push({ inputs: inputs, result: evaluate(inputs) });
    }
    return rows;
  }

  function renderTruth(v) {
    const preset = PRESETS[state.preset];
    const pins = preset.pins;
    const rows = truthRows();

    const midCols = state.preset === 'combo' ? ['①', '②'] : [];
    const outCols = preset.outputs;

    const head =
      pins.map((p) => `<th scope="col">${p}</th>`).join('') +
      midCols.map((m) => `<th scope="col">${m}</th>`).join('') +
      outCols.map((o) => `<th scope="col">${o}</th>`).join('');

    const body = rows
      .map((row) => {
        const current = pins.every((p) => row.inputs[p] === state.inputs[p]);
        const cells =
          pins.map((p) => `<td>${row.inputs[p]}</td>`).join('') +
          midCols.map((_, i) => `<td>${row.result.g[i]}</td>`).join('') +
          row.result.out
            .map((o) => `<td class="sim-logic-truth-out">${o}</td>`)
            .join('');
        return `<tr data-current="${current}">${cells}</tr>`;
      })
      .join('');

    el.truthHead.innerHTML = `<tr>${head}</tr>`;
    el.truthBody.innerHTML = body;
  }

  /* ---------------- ゲート選択列 ---------------- */

  function renderPicker() {
    const slots = PRESETS[state.preset].slots;
    if (slots === 0) {
      el.picker.hidden = true;
      el.picker.innerHTML = '';
      return;
    }
    el.picker.hidden = false;

    const names = ['①（A と B）', '②（C を通す）', '③（① と ②）'];
    let html = '';
    for (let i = 0; i < slots; i += 1) {
      const label = slots === 1 ? 'ゲートを選ぶ' : names[i];
      const chips = GATE_ORDER.map(
        (g) =>
          `<button type="button" class="sim-chip" data-logic-gate="${i}" data-logic-name="${g}" ` +
          `aria-pressed="${state.gates[i] === g}">${g}</button>`
      ).join('');
      html +=
        `<div class="sim-logic-picker-row">` +
        `<span class="sim-logic-picker-label">${label}</span>` +
        `<div class="sim-logic-gates" role="group" aria-label="${label}">${chips}</div>` +
        `</div>`;
    }
    el.picker.innerHTML = html;
  }

  /* ---------------- 全体の更新 ---------------- */

  function render() {
    const v = evaluate(state.inputs);
    const pins = PRESETS[state.preset].pins;

    el.circuit.innerHTML = drawCircuit(v);
    el.expr.innerHTML = exprText(v);
    renderTruth(v);

    // 入力スイッチ。使わないピンは押せなくする。
    el.switches.forEach((btn) => {
      const name = btn.getAttribute('data-logic-input');
      const used = pins.indexOf(name) >= 0;
      btn.disabled = !used;
      const bit = state.inputs[name];
      btn.setAttribute('aria-pressed', used && bit === 1 ? 'true' : 'false');
      btn.querySelector('.sim-logic-switch-bit').textContent = used ? bit : '−';
    });

    el.presets.forEach((btn) => {
      btn.setAttribute(
        'aria-pressed',
        btn.getAttribute('data-logic-preset') === state.preset ? 'true' : 'false'
      );
    });
  }

  /* ---------------- 起動 ---------------- */

  function init() {
    el.circuit = document.getElementById('sim-logic-circuit');
    el.expr = document.getElementById('sim-logic-expr');
    el.picker = document.getElementById('sim-logic-picker');
    el.truthHead = document.getElementById('sim-logic-truth-head');
    el.truthBody = document.getElementById('sim-logic-truth-body');
    if (!el.circuit || !el.truthBody) return;

    el.switches = Array.from(document.querySelectorAll('[data-logic-input]'));
    el.presets = Array.from(document.querySelectorAll('[data-logic-preset]'));

    el.switches.forEach((btn) => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-logic-input');
        state.inputs[name] = state.inputs[name] ? 0 : 1;
        render();
      });
    });

    el.presets.forEach((btn) => {
      btn.addEventListener('click', () => {
        state.preset = btn.getAttribute('data-logic-preset');
        renderPicker();
        render();
      });
    });

    // ゲートの列は差し替えるので、親でクリックを受ける。
    el.picker.addEventListener('click', (event) => {
      const btn = event.target.closest('[data-logic-gate]');
      if (!btn) return;
      const slot = Number(btn.getAttribute('data-logic-gate'));
      state.gates[slot] = btn.getAttribute('data-logic-name');
      renderPicker();
      render();
    });

    if (window.SimUI) {
      window.SimUI.bindViewTabs(document, { showBothWidth: 900 });
      window.SimUI.bindTabs(document);
    }

    renderPicker();
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
