// Burger meniu
const burger = document.getElementById('burger');
const nav = document.getElementById('main-nav');

burger.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', opened ? 'true' : 'false');
});

// Uždaryti meniu paspaudus ant nuorodos (mobiliai)
nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
    });
});

// Metai footeryje
document.getElementById('year').textContent = new Date().getFullYear();

// Demo formos siuntymo imitacija
const fakeSubmit = document.getElementById('fake-submit');
fakeSubmit?.addEventListener('click', () => {
    alert('Ačiū! Tai demo forma portfeliui. Realų siuntimą prijungsime vėliau.');
});
// Viena vieta telefono numeriui
const PHONE_RAW = '+37060099999';      // be tarpų, eina į href
const PHONE_DISPLAY = '+370 600 99 999'; // su tarpais, rodomas tekstas

document.querySelectorAll('.js-phone').forEach(a => {
    a.href = 'tel:' + PHONE_RAW;
    a.textContent = PHONE_DISPLAY;
});
