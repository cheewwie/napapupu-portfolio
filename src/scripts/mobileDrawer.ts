/**
 * The rail-as-drawer, below 900px (design/README.md, "Decided since the
 * export"): opener bar grows into the drawer and becomes its footer,
 * flipping to Close. Scrim leaves a sliver of page visible. Opening pushes
 * a history entry so the back gesture closes it; the page behind is
 * `inert`; focus returns to the opener on close.
 */
export function initMobileDrawer(): void {
  const rail = document.getElementById('rail');
  const opener = document.getElementById('rail-opener');
  const scrim = document.getElementById('rail-scrim');
  const main = document.querySelector<HTMLElement>('main.content');

  if (!rail || !opener || !scrim) return;

  let isOpen = false;

  const open = (): void => {
    if (isOpen) return;
    isOpen = true;
    rail.classList.add('is-open');
    scrim.classList.add('is-open');
    opener.classList.add('is-open');
    opener.setAttribute('aria-expanded', 'true');
    main?.setAttribute('inert', '');
    history.pushState({ railOpen: true }, '');

    // Focus the drawer itself, not its first link — a same-page #hash link
    // would drag the (still-scrolled) page behind the scrim back to that
    // anchor the moment it receives focus.
    rail.focus();
  };

  const close = (fromPopstate = false): void => {
    if (!isOpen) return;
    isOpen = false;
    rail.classList.remove('is-open');
    scrim.classList.remove('is-open');
    opener.classList.remove('is-open');
    opener.setAttribute('aria-expanded', 'false');
    main?.removeAttribute('inert');
    opener.focus();
    if (!fromPopstate) history.back();
  };

  opener.addEventListener('click', () => (isOpen ? close() : open()));
  scrim.addEventListener('click', () => close());

  // A chapter/filter link inside the drawer should close it, not leave the
  // scrim covering the page it just navigated the reader to.
  rail.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.closest('#chapter-nav a')) close();
  });

  window.addEventListener('popstate', () => close(true));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });

  const desktopQuery = window.matchMedia('(min-width: 901px)');
  desktopQuery.addEventListener('change', (event) => {
    if (event.matches) close(true);
  });
}
