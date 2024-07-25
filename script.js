const myAcc = document.getElementById('my-account');
const myAccMenu = document.getElementById('my-acc-menu');
console.log(myAccMenu.style.display);
myAcc.addEventListener('click', () => {
    myAccMenu.style.display = myAccMenu.style.display == 'none' ? 'block' : 'none';
});
const currency = document.getElementById('currency');
const currencyMenu = document.getElementById('currency-menu');
currency.addEventListener('click', () => {

    currencyMenu.style.display = currencyMenu.style.display == 'none' ? 'block' : 'none';
});
const lang = document.getElementById('lang');
const langMenu = document.getElementById('lang-menu');
lang.addEventListener('click', () => {

    langMenu.style.display = langMenu.style.display == 'none' ? 'block' : 'none';
});

const menuBtn = document.getElementById('menu-btn');
const menuDiv = document.querySelector('.menu');
let menuOpen = 0;
menuBtn.addEventListener('click', () => {
    if (menuOpen = !menuOpen) {
        menuDiv.classList.add("menu-open");
        menuDiv.classList.remove("menu-close");
    }
    else {
        menuDiv.classList.remove("menu-open");
        menuDiv.classList.add("menu-close");
    }
});


// category toggle
const catBtn = document.getElementById('cat-btn');
const catDiv = document.querySelector('.cat-list');
catBtn.addEventListener('click', () => {
    catDiv.classList.toggle('d-none');
});

/* subcategory toggle */
const subCatBtn = document.querySelector('.sub-item');
const subCat = document.querySelector('.sub-cat');
subCatBtn.addEventListener('click', () => {
    subCat.classList.toggle('d-none');
});

