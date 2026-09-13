const menu = document.querySelector('.menu'); const nav = document.querySelector('nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), {threshold:.12});
document.querySelectorAll('.section, footer').forEach(el => observer.observe(el));
