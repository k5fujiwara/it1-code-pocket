function applySavedTheme() {
  const savedTheme = localStorage.getItem('quiz-theme');
  if (['simple', 'cool', 'pop'].includes(savedTheme)) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }
}

function renderSiteFooter() {
  const mount = document.getElementById('site-footer');
  if (!mount) return;

  mount.innerHTML = `
    <footer class="site-footer">
      <nav class="site-footer-links" aria-label="サイト情報">
        <a href="about.html">このサイトについて</a>
        <a href="privacy.html">プライバシーポリシー</a>
        <a href="contact.html">お問い合わせ</a>
        <a href="terms.html">利用規約・免責事項</a>
      </nav>
      <p class="site-footer-copy">© IT1-CODE-POCKET</p>
    </footer>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  renderSiteFooter();
});
