const banana_burger = document.querySelector('.banana_burger')
const nav = document.querySelector('.nav_links')

function toggleMenu() {
    nav.classList.toggle('nav-active')
    banana_burger.classList.toggle('toggle')
}

banana_burger.addEventListener('click', toggleMenu)

const newsletter = document.querySelector('#newsletter_button')

function togglefill() {
    newsletter.classList.toggle('toggle') 
}

newsletter.addEventListener('click', togglefill)
