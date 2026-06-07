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

  const currentPage = window.location.pathname.split('/').pop();
  const isTopPage = currentPage === '' || currentPage === 'index.html';
  const shareUrl = encodeURIComponent('https://it1-code-pocket.com/');
  const shareText = encodeURIComponent('IT1-CODE-POCKET | 情報Ⅰ 第3問対策');
  const lineShareText = encodeURIComponent('IT1-CODE-POCKET | 情報Ⅰ 第3問対策\nhttps://it1-code-pocket.com/');
  const shareLinks = isTopPage
    ? `
      <div class="site-footer-share" aria-label="SNSで共有">
        <a class="site-footer-share-btn share-x" href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}" target="_blank" rel="noopener noreferrer">Xで共有</a>
        <a class="site-footer-share-btn share-line" href="https://line.me/R/msg/text/?${lineShareText}" target="_blank" rel="noopener noreferrer">LINEで共有</a>
        <a class="site-footer-share-btn share-facebook" href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
    `
    : '';

  mount.innerHTML = `
    <footer class="site-footer">
      ${shareLinks}
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
