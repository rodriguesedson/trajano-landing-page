const header_btn = document.getElementById('header-btn')
const aside = document.getElementById('aside');
const aside_logo = document.getElementById('aside-logo');
const aside_link = document.getElementsByClassName('aside-link');

header_btn.addEventListener('click', openMenu);
aside_logo.addEventListener('click', closeMenu);
Array.from(aside_link).forEach(item => {
    item.addEventListener('click', closeMenu);
});
    
function openMenu() {
    aside.style.display = 'flex';
}

function closeMenu() {
    aside.style.display = 'none';
}