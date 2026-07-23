// 任意のカスタムアニメーション用（後で拡張）
class TsubakiAnimations {
  static parallax(element, speed = 0.5) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      element.style.transform = `translateY(${rate}px)`;
    });
  }

  static staggerFade(selector, delay = 100) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * delay}ms`;
    });
  }
}