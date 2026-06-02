// ===== Web Audio API =====
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playTone(freq, duration, type = 'sine', volume = 0.3, delay = 0) {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, ctx.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(ctx.currentTime + delay);
  osc.stop(ctx.currentTime + delay + duration);
}

function playCorrectSound() {
  playTone(880, 0.12, 'sine', 0.25, 0);
  playTone(1175, 0.15, 'sine', 0.25, 0.15);
}

function playWrongSound() {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(180, ctx.currentTime);
  osc.frequency.setValueAtTime(120, ctx.currentTime + 0.15);
  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.5);
}

// ===== アプリ状態 =====
const SESSION_KEY = 'quiz-saved-session-v1';

const state = {
  langMode: 'python',
  difficulty: '基礎',
  theme: 'simple',
  questions: [],
  currentIndex: 0,
  score: 0,
  answered: false,
  selectedIndex: null
};

// ===== テーマ =====
function setTheme(theme) {
  state.theme = theme;
  document.body.setAttribute('data-theme', theme);
  document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.themeBtn === theme);
  });
  localStorage.setItem('quiz-theme', theme);
}

// ===== 設定選択 =====
function selectLangMode(mode) {
  state.langMode = mode;
  document.querySelectorAll('#lang-mode-group button').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.lang === mode);
  });
}

function selectDifficulty(diff) {
  state.difficulty = diff;
  document.querySelectorAll('#difficulty-group button').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.diff === diff);
  });
}

// ===== 画面遷移 =====
function showScreen(id) {
  ['screen-top', 'screen-quiz', 'screen-result'].forEach(s => {
    document.getElementById(s).classList.toggle('hidden', s !== id);
  });
  document.body.classList.toggle('is-quiz-screen', id === 'screen-quiz');
}

function goHome() {
  showScreen('screen-top');
  updateResumeCard();
}

// ===== 中断・再開 =====
function getSavedSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

function saveSession() {
  if (!state.questions.length) return;

  const session = {
    langMode: state.langMode,
    difficulty: state.difficulty,
    questionIds: state.questions.map(q => q.id),
    currentIndex: state.currentIndex,
    score: state.score,
    answered: state.answered,
    selectedIndex: state.selectedIndex,
    savedAt: new Date().toISOString()
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  updateResumeCard();
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
  updateResumeCard();
}

function updateResumeCard() {
  const card = document.getElementById('resume-card');
  const summary = document.getElementById('resume-summary');
  if (!card || !summary) return;

  const session = getSavedSession();
  if (!session || !Array.isArray(session.questionIds) || session.questionIds.length === 0) {
    card.classList.add('hidden');
    summary.textContent = '';
    return;
  }

  const label = session.langMode === 'python' ? 'Python' : 'DNCL';
  const current = Math.min(session.currentIndex + 1, session.questionIds.length);
  summary.textContent = `${label} / ${session.difficulty} / ${current}問目から再開できます（${session.score}点）`;
  card.classList.remove('hidden');
}

function restoreSelections(langMode, difficulty) {
  state.langMode = langMode;
  state.difficulty = difficulty;
  document.querySelectorAll('#lang-mode-group button').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.lang === langMode);
  });
  document.querySelectorAll('#difficulty-group button').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.diff === difficulty);
  });
}

function resumeQuiz() {
  const session = getSavedSession();
  if (!session) {
    alert('再開できるクイズがありません。');
    updateResumeCard();
    return;
  }

  const questionMap = new Map(QUESTIONS.map(q => [q.id, q]));
  const questions = session.questionIds.map(id => questionMap.get(id)).filter(Boolean);
  if (questions.length !== session.questionIds.length || questions.length === 0) {
    alert('保存データの問題が見つかりません。保存データを削除します。');
    clearSession();
    return;
  }

  restoreSelections(session.langMode, session.difficulty);
  state.questions = questions;
  state.currentIndex = Math.min(session.currentIndex, questions.length - 1);
  state.score = Number(session.score) || 0;
  state.answered = Boolean(session.answered);
  state.selectedIndex = Number.isInteger(session.selectedIndex) ? session.selectedIndex : null;
  showScreen('screen-quiz');
  renderQuestion();
}

function suspendQuiz() {
  saveSession();
  alert('現在の進行状況を保存しました。トップ画面から再開できます。');
  showScreen('screen-top');
  updateResumeCard();
}

function abandonQuiz() {
  const ok = confirm('現在のクイズを終了してトップへ戻りますか？保存済みの中断データも削除されます。');
  if (!ok) return;
  clearSession();
  state.questions = [];
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.selectedIndex = null;
  showScreen('screen-top');
}

function deleteSavedSession() {
  const ok = confirm('保存中のクイズを削除しますか？');
  if (!ok) return;
  clearSession();
}

// ===== クイズ開始 =====
function startQuiz() {
  state.questions = QUESTIONS.filter(q =>
    q.langMode === state.langMode && q.difficulty === state.difficulty
  );

  if (state.questions.length === 0) {
    alert('該当する問題がありません。言語モードまたは難易度を変更してください。');
    return;
  }

  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.selectedIndex = null;
  showScreen('screen-quiz');
  renderQuestion();
  saveSession();
}

// ===== 問題表示 =====
function renderQuestion() {
  const q = state.questions[state.currentIndex];

  document.getElementById('progress-fill').style.width = `${((state.currentIndex) / state.questions.length) * 100}%`;
  document.getElementById('quiz-title').textContent = q.title;

  const promptEl = document.getElementById('quiz-prompt');
  if (q.prompt) {
    promptEl.textContent = q.prompt;
    promptEl.classList.remove('hidden');
  } else {
    promptEl.textContent = '';
    promptEl.classList.add('hidden');
  }

  renderNotices();
  renderCode(q);
  renderChoices(q);

  document.getElementById('feedback-area').classList.add('hidden');
  document.getElementById('explanation-details').classList.add('hidden');
  document.getElementById('explanation-details').open = false;
  document.getElementById('btn-next').classList.add('hidden');

  if (state.answered && state.selectedIndex !== null) {
    restoreAnsweredState(q);
  }
}

function renderNotices() {
  const area = document.getElementById('notice-area');
  area.innerHTML = '';
  const notices = [];

  if (state.langMode === 'python') {
    notices.push('⚠️ 注意: Pythonの配列（リスト）のインデックス（添字）は【0】から開始します。');
  }
  if (state.langMode === 'dncl') {
    notices.push('⚠️ 注意: 共通テスト用プログラム表記の配列の添字は、特に説明がない場合【0】から開始します。');
  }

  notices.forEach(text => {
    const div = document.createElement('div');
    div.className = 'warning-box';
    div.textContent = text;
    area.appendChild(div);
  });
}

function renderCode(q) {
  const area = document.getElementById('code-area');
  area.innerHTML = '';

  const pre = document.createElement('pre');
  pre.className = 'code-block';
  pre.textContent = q.code || '';
  area.appendChild(pre);
}

function renderChoices(q) {
  const area = document.getElementById('choices-area');
  area.innerHTML = '';
  const count = q.choices.length;
  const hasCodeChoice = q.choices.some(choice => /[\n⎿｜]/.test(choice));
  const isDesktop = window.matchMedia('(min-width: 900px)').matches;
  const cols = hasCodeChoice ? 1 : (isDesktop && count === 4 ? 2 : (count <= 4 ? 1 : 2));
  area.className = `grid gap-2.5 mb-4 ${cols === 2 ? 'grid-cols-2' : 'grid-cols-1'}`;

  q.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn w-full';
    if (/[\n⎿｜]/.test(choice)) {
      btn.classList.add('choice-btn-code');
    }

    const label = document.createElement('span');
    label.className = 'choice-label';
    label.textContent = `${String.fromCharCode(65 + i)}.`;

    const text = document.createElement('span');
    text.className = 'choice-text';
    text.textContent = choice;

    btn.append(label, text);
    btn.onclick = () => answer(i);
    area.appendChild(btn);
  });
}

// ===== 回答処理 =====
function answer(selectedIndex) {
  if (state.answered) return;
  state.answered = true;
  state.selectedIndex = selectedIndex;

  const q = state.questions[state.currentIndex];
  const isCorrect = selectedIndex === q.correctIndex;
  const buttons = document.querySelectorAll('#choices-area .choice-btn');

  if (isCorrect) {
    state.score++;
    playCorrectSound();
    const fb = document.getElementById('feedback-area');
    fb.className = 'feedback-ok mb-3 text-center py-3 font-bold text-lg';
    fb.textContent = '🎉 OK！ 正解！';
    fb.classList.remove('hidden');
  } else {
    playWrongSound();
    const fb = document.getElementById('feedback-area');
    fb.className = 'feedback-ng mb-3 text-center py-3 font-bold text-lg';
    fb.textContent = '❌ 不正解…';
    fb.classList.remove('hidden');
    buttons[selectedIndex].classList.add('wrong');
  }

  buttons[q.correctIndex].classList.add('correct');
  buttons.forEach(btn => btn.disabled = true);

  const details = document.getElementById('explanation-details');
  document.getElementById('explanation-body').innerHTML = q.explanation;
  details.classList.remove('hidden');
  document.getElementById('btn-next').classList.remove('hidden');
  saveSession();
}

function restoreAnsweredState(q) {
  const selectedIndex = state.selectedIndex;
  const buttons = document.querySelectorAll('#choices-area .choice-btn');
  const isCorrect = selectedIndex === q.correctIndex;

  const fb = document.getElementById('feedback-area');
  if (isCorrect) {
    fb.className = 'feedback-ok mb-3 text-center py-3 font-bold text-lg';
    fb.textContent = '🎉 OK！ 正解！';
  } else {
    fb.className = 'feedback-ng mb-3 text-center py-3 font-bold text-lg';
    fb.textContent = '❌ 不正解…';
    if (buttons[selectedIndex]) {
      buttons[selectedIndex].classList.add('wrong');
    }
  }
  fb.classList.remove('hidden');

  if (buttons[q.correctIndex]) {
    buttons[q.correctIndex].classList.add('correct');
  }
  buttons.forEach(btn => btn.disabled = true);

  const details = document.getElementById('explanation-details');
  document.getElementById('explanation-body').innerHTML = q.explanation;
  details.classList.remove('hidden');
  document.getElementById('btn-next').classList.remove('hidden');
}

// ===== 次の問題 =====
function nextQuestion() {
  state.currentIndex++;
  if (state.currentIndex >= state.questions.length) {
    showResult();
  } else {
    state.answered = false;
    state.selectedIndex = null;
    renderQuestion();
    saveSession();
  }
}

function showResult() {
  clearSession();
  showScreen('screen-result');
  const total = state.questions.length;
  const pct = Math.round((state.score / total) * 100);
  document.getElementById('result-score').textContent = `${state.score} / ${total}`;
  document.getElementById('result-detail').textContent = `正答率 ${pct}%`;
  document.getElementById('result-emoji').textContent = pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '💪';
  document.getElementById('progress-fill').style.width = '100%';
}

// ===== 初期化 =====
(function init() {
  const saved = localStorage.getItem('quiz-theme');
  if (saved && ['simple', 'cool', 'pop'].includes(saved)) {
    setTheme(saved);
  }
  updateResumeCard();
  window.addEventListener('resize', () => {
    if (!state.questions.length || document.getElementById('screen-quiz').classList.contains('hidden')) return;
    renderChoices(state.questions[state.currentIndex]);
    if (state.answered && state.selectedIndex !== null) {
      restoreAnsweredState(state.questions[state.currentIndex]);
    }
  });
})();
