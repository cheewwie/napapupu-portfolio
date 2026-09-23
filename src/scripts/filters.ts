/**
 * Homepage index filters: Access, then User, then Device, single-select each,
 * combined with AND. Each chip's count reflects what it would yield given the
 * OTHER two groups' current state. Also list hides once User or Device is
 * narrowed, or Access is set to "On request". See design/README.md.
 */

type FilterKey = 'access' | 'user' | 'device';
type FilterState = Record<FilterKey, string>;

export function initFilters(): void {
  const rail = document.getElementById('rail');
  const list = document.getElementById('projects-list');
  const empty = document.getElementById('projects-empty');
  const countEl = document.getElementById('projects-count');
  const alsoSection = document.getElementById('also-section');

  if (!rail || !list || !empty || !countEl) return;

  const rows = Array.from(list.querySelectorAll<HTMLAnchorElement>('.idx-row'));
  const chips = Array.from(rail.querySelectorAll<HTMLButtonElement>('.chip'));
  const total = rows.length;
  const openerValue = document.getElementById('rail-opener-value-text');

  const state: FilterState = { access: 'all', user: 'all', device: 'all' };

  function rowMatches(row: HTMLAnchorElement, s: FilterState): boolean {
    const access = row.dataset.access ?? '';
    const user = row.dataset.user ?? '';
    const devices = (row.dataset.devices ?? '').split(/\s+/).filter(Boolean);

    if (s.access !== 'all' && access !== s.access) return false;
    if (s.user !== 'all' && user !== s.user) return false;
    if (s.device !== 'all' && !devices.includes(s.device)) return false;
    return true;
  }

  function countFor(kind: FilterKey, value: string): number {
    const probe: FilterState = { ...state, [kind]: value };
    return rows.filter((row) => rowMatches(row, probe)).length;
  }

  const render = (): void => {
    let visible = 0;
    for (const row of rows) {
      const match = rowMatches(row, state);
      row.hidden = !match;
      if (match) visible += 1;
    }

    countEl.textContent = `${visible} of ${total}`;
    empty.hidden = visible > 0;

    if (alsoSection) {
      const alsoVisible = state.user === 'all' && state.device === 'all' && state.access !== 'on-request';
      alsoSection.hidden = !alsoVisible;
    }

    for (const chip of chips) {
      const group = chip.dataset.group as FilterKey | undefined;
      const value = chip.dataset.value;
      if (!group || value === undefined) continue;

      const selected = state[group] === value;
      chip.setAttribute('aria-checked', String(selected));

      const countTarget = chip.querySelector('[data-count]');
      if (countTarget) countTarget.textContent = String(countFor(group, value));

      // The mobile drawer's opener bar mirrors the Access group's current label.
      if (selected && group === 'access' && openerValue) {
        const label = chip.querySelector('.chip-label')?.textContent ?? '';
        openerValue.textContent = `${visible} of ${total} · ${label}`;
      }
    }
  };

  for (const chip of chips) {
    chip.addEventListener('click', () => {
      const group = chip.dataset.group as FilterKey | undefined;
      const value = chip.dataset.value;
      if (!group || value === undefined || state[group] === value) return;

      state[group] = value;
      render();
    });
  }

  render();
}
