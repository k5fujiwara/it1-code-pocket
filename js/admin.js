const langLabels = {
  python: "Python",
  dncl: "DNCL"
};

const filters = {
  lang: "all",
  difficulty: "all",
  pattern: "all"
};

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("quiz-theme", theme);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getFilteredQuestions() {
  return QUESTIONS.filter(q => {
    const langOk = filters.lang === "all" || q.langMode === filters.lang;
    const difficultyOk = filters.difficulty === "all" || q.difficulty === filters.difficulty;
    const patternOk = filters.pattern === "all" || q.pattern === filters.pattern;
    return langOk && difficultyOk && patternOk;
  });
}

function countBy(key, questions = QUESTIONS) {
  return questions.reduce((acc, q) => {
    acc[q[key]] = (acc[q[key]] || 0) + 1;
    return acc;
  }, {});
}

function renderSummary() {
  const langCounts = countBy("langMode");
  const difficultyCounts = countBy("difficulty");
  const cards = [
    { label: "全問題", value: QUESTIONS.length },
    { label: "Python", value: langCounts.python || 0 },
    { label: "DNCL", value: langCounts.dncl || 0 },
    { label: "基礎", value: difficultyCounts["基礎"] || 0 },
    { label: "標準", value: difficultyCounts["標準"] || 0 },
    { label: "発展", value: difficultyCounts["発展"] || 0 }
  ];

  document.getElementById("summary-area").innerHTML = cards.map(card => `
    <div class="themed-card admin-summary-card">
      <div class="themed-text-muted text-xs">${card.label}</div>
      <div class="text-2xl font-bold">${card.value}</div>
    </div>
  `).join("");
}

function renderQuestionList() {
  const list = document.getElementById("question-list");
  const questions = getFilteredQuestions();
  document.getElementById("result-count").textContent = `${questions.length}問を表示中`;

  if (questions.length === 0) {
    list.innerHTML = `
      <div class="themed-card p-6 text-center themed-text-muted">
        条件に一致する問題はありません。
      </div>
    `;
    return;
  }

  list.innerHTML = questions.map(q => {
    const code = q.code || "";
    const correctChoice = q.choices[q.correctIndex];
    const choices = q.choices.map((choice, index) => {
      const isCodeChoice = /[\n⎿｜]/.test(choice);
      return `
      <li class="${index === q.correctIndex ? "admin-choice-correct" : ""} ${isCodeChoice ? "admin-choice-code" : ""}">
        <span class="admin-choice-label">${String.fromCharCode(65 + index)}.</span>
        <span class="admin-choice-text">${escapeHtml(choice)}</span>
      </li>
    `;
    }).join("");

    return `
      <article class="themed-card admin-question-card">
        <div class="flex flex-wrap items-center gap-2 mb-3">
          <span class="pattern-badge">ID ${q.id}</span>
          <span class="admin-badge">${escapeHtml(langLabels[q.langMode] || q.langMode)}</span>
          <span class="admin-badge">${escapeHtml(q.difficulty)}</span>
          <span class="admin-badge">パターン${escapeHtml(q.pattern)}：${escapeHtml(q.patternLabel)}</span>
        </div>

        <h2 class="font-bold text-lg mb-2">${escapeHtml(q.title)}</h2>
        <p class="admin-prompt mb-3">${escapeHtml(q.prompt)}</p>

        <pre class="code-block admin-code">${escapeHtml(code)}</pre>

        <details class="admin-details mt-3">
          <summary>選択肢・正解・解説を確認</summary>
          <div class="pt-3">
            <ol class="admin-choice-list">${choices}</ol>
            <p class="mt-3 text-sm">
              <span class="font-bold">正解：</span>
              ${String.fromCharCode(65 + q.correctIndex)}. ${escapeHtml(correctChoice)}
            </p>
            <div class="admin-explanation mt-3">
              <span class="font-bold">解説：</span>${q.explanation}
            </div>
          </div>
        </details>
      </article>
    `;
  }).join("");
}

function resetFilters() {
  filters.lang = "all";
  filters.difficulty = "all";
  filters.pattern = "all";
  document.getElementById("filter-lang").value = "all";
  document.getElementById("filter-difficulty").value = "all";
  document.getElementById("filter-pattern").value = "all";
  renderQuestionList();
}

function bindFilters() {
  document.getElementById("filter-lang").addEventListener("change", event => {
    filters.lang = event.target.value;
    renderQuestionList();
  });
  document.getElementById("filter-difficulty").addEventListener("change", event => {
    filters.difficulty = event.target.value;
    renderQuestionList();
  });
  document.getElementById("filter-pattern").addEventListener("change", event => {
    filters.pattern = event.target.value;
    renderQuestionList();
  });
}

(function initAdmin() {
  const savedTheme = localStorage.getItem("quiz-theme");
  if (savedTheme && ["simple", "cool", "pop"].includes(savedTheme)) {
    setTheme(savedTheme);
  }

  bindFilters();
  renderSummary();
  renderQuestionList();
})();
