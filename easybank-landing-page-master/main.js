const hamburgerToggle = document.getElementById('hamburgerToggle')
const hamburgerToggleImage = document.getElementById('hamburgerToggleImage')
const navLinks = document.getElementById('navLinks')

hamburgerToggle.addEventListener('click',() => {
    navLinks.classList.toggle('nav-links-active')
    if(navLinks.classList.contains('nav-links-active')){
        hamburgerToggleImage.src = 'images/icon-close.svg'
    }else if(!navLinks.classList.contains('nav-links-active')){
        hamburgerToggleImage.src = 'images/icon-hamburger.svg'
    }
})