// SCROLL

// export function scrollToSection(id) {
//   const el = document.getElementById(id);
//   if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
// }

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const navbar = document.querySelector('nav');
  const navbarHeight = navbar ? navbar.offsetHeight : 0; //preventing section title goes under navbar while scroll

  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;

  window.scrollTo({ top, behavior: 'smooth' });
}