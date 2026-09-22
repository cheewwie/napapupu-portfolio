/**
 * The rail's "Show artefacts" switch — the difference between
 * design/reference/d-case-below.html (shown) and d-case-closed.html
 * (hidden), rendered from one flag per design/README.md. The hero figure
 * is never tagged data-artefact, so it always stays.
 */
const STORAGE_KEY = 'artefacts-shown';

function readStoredPreference(): boolean | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw === null ? null : raw === 'true';
  } catch {
    return null;
  }
}

function writeStoredPreference(shown: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEY, String(shown));
  } catch {
    // Private browsing / blocked storage — the toggle still works for this page view.
  }
}

export function initArtefactToggle(): void {
  const toggle = document.getElementById('artefact-toggle');
  const marginalia = document.getElementById('artefact-marginalia');
  const artefacts = document.querySelectorAll<HTMLElement>('[data-artefact]');
  const count = artefacts.length;

  if (!toggle || count === 0) {
    // Nothing to hide — drop the whole control rather than show an inert switch.
    document.getElementById('artefact-toggle-row')?.remove();
    if (marginalia) marginalia.textContent = 'Artefacts break the text where the story needs them';
    return;
  }

  function render(shown: boolean): void {
    document.body.classList.toggle('artefacts-hidden', !shown);
    toggle?.setAttribute('aria-checked', String(shown));
    if (marginalia) {
      marginalia.textContent = shown
        ? 'Artefacts break the text where the story needs them'
        : `${count} artefact${count === 1 ? '' : 's'} behind the toggle`;
    }
  }

  const stored = readStoredPreference();
  render(stored ?? true);

  toggle.addEventListener('click', () => {
    const nowShown = toggle.getAttribute('aria-checked') !== 'true';
    render(nowShown);
    writeStoredPreference(nowShown);
  });
}
