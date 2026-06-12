/* ─── Sticky header copy button ─── */
const copyIconSvg = `<svg width="12" height="12" fill="none" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" stroke-width="1.8"/><path stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`;
const checkIconSvg = `<svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M4 12l6 6L20 6"/></svg>`;
function stickyCopy(btn) {
  navigator.clipboard.writeText('weerdmolls@gmail.com').then(() => {
    btn.innerHTML = checkIconSvg;
    const tooltip = btn.nextElementSibling;
    if (tooltip) tooltip.classList.add('visible');
    setTimeout(() => {
      btn.innerHTML = copyIconSvg;
      if (tooltip) tooltip.classList.remove('visible');
    }, 2000);
  });
}

/* ─── Theme ─── */
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'dark');
}
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}
