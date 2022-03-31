
const newsletter = document.querySelector('#newsletter_button')


function toggleFill() {
    newsletter.classList.toggle('toggle') 
}

newsletter.addEventListener('click', toggleFill)

