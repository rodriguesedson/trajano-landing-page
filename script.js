const header_btn = document.getElementById('header-btn')
const aside = document.getElementById('aside');
const aside_logo = document.getElementById('aside-logo');
const aside_link = document.getElementsByClassName('aside-link');
//TODO: to implement
const header_link_about = document.getElementById('header-link-about');
const header_link_contacts = document.getElementById('header-link-contacts');
const aside_link_about = document.getElementById('aside_link_about');
const aside_link_contacts = document.getElementById('aside-link-contacts');
const links_to_implement = [header_link_contacts, header_link_about, aside_link_contacts, aside_link_about];
//end

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

//alert to implement
Array.from(links_to_implement).forEach(item => {
    item.addEventListener('click', displayMessage);
});

function displayMessage() {
    alert('Seção em manutenção');
}