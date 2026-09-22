/**
 * Builds the rail's "On this page" nav from the rendered chapters rather
 * than a duplicated list, then keeps it in sync with scroll position:
 * seen (above the fold line), current, upcoming. See design/README.md.
 */
export function initChapterNav(): void {
  const nav = document.getElementById('chapter-nav');
  if (!nav) return;

  const chapters = Array.from(document.querySelectorAll<HTMLElement>('.chapter[data-n]'));
  if (chapters.length === 0) return;

  const links = chapters.map((chapter) => {
    const n = chapter.dataset.n ?? '';
    const title = chapter.dataset.title ?? '';

    const link = document.createElement('a');
    link.href = `#c${n}`;
    link.className = 'chapter-nav-link';

    const dot = document.createElement('span');
    dot.className = 'chapter-nav-dot';
    dot.setAttribute('aria-hidden', 'true');

    const label = document.createElement('span');
    label.textContent = `${n} · ${title}`;

    link.append(dot, label);
    nav.appendChild(link);
    return link;
  });

  const FOLD_OFFSET = 140;
  const openerValue = document.getElementById('rail-opener-value-text');

  function update(): void {
    let currentIndex = 0;
    for (let i = 0; i < chapters.length; i++) {
      if (chapters[i].getBoundingClientRect().top - FOLD_OFFSET <= 0) currentIndex = i;
    }

    links.forEach((link, i) => {
      link.classList.toggle('is-seen', i < currentIndex);
      link.classList.toggle('is-current', i === currentIndex);
      link.classList.toggle('is-upcoming', i > currentIndex);
    });

    // The mobile drawer's opener bar mirrors the current chapter.
    if (openerValue) {
      const current = chapters[currentIndex];
      openerValue.textContent = `${current.dataset.n} · ${current.dataset.title}`;
    }
  }

  update();

  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    },
    { passive: true },
  );
  window.addEventListener('resize', update);
}
