// スクロール連動フェードイン
function initScrollFade() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));
}

// ページ読み込み時
document.addEventListener('DOMContentLoaded', () => {
  initScrollFade();
});

// トップへ戻るボタン
function initScrollToTop() {
  const btn = document.createElement('button');
  btn.className = 'scroll-to-top';
  btn.innerHTML = '↑';
  btn.setAttribute('aria-label', 'ページトップへ戻る');
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
}

// DOMContentLoaded 内に追加
document.addEventListener('DOMContentLoaded', () => {
  initScrollFade();
  initScrollToTop();
});

// ハンバーガーメニュー
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // メニューリンクをクリックしたら閉じる
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    });
  });
}

// DOMContentLoaded に追加
document.addEventListener('DOMContentLoaded', () => {
  initScrollFade();
  initScrollToTop();
  initHamburger();
});
