const mobileNav = document.getElementById('mobileNav')
const toggleBtn = document.getElementById('toggleBtn')
const toggleImg = document.getElementById('toggleImg')

const carouselBullets = document.querySelectorAll('.carousel-bullet')
const comments = document.querySelectorAll('.comment')
const profileNames = document.querySelectorAll('.profile-name')
const profileComments = document.querySelectorAll('.profile-comment')


let toggleClicked = false

// for toggle btn
toggleBtn.addEventListener('click',() => {
    if(!toggleClicked){
        mobileNav.style.transform = "scale(1,1)"
        toggleImg.src = 'images/icon-close.svg'
        toggleClicked = true
    }else if(toggleClicked){
        mobileNav.style.transform = "scale(1,0)"
        toggleImg.src = 'images/icon-hamburger.svg'
        toggleClicked = false
    }
})


// carousel bullet 
carouselBullets.forEach((CB,i) => {
    
    CB.addEventListener('click', () => {
        removeAllCarouselBulletBackground()
        CB.classList.add('carousel-bullet-active')
        hideAllComments()
        comments[i].style.display = 'flex'
    })
})

function removeAllCarouselBulletBackground(){
    carouselBullets.forEach(cb => cb.classList.remove('carousel-bullet-active'))
}

function hideAllComments(){
    comments.forEach(c => c.style.display = 'none')
}

//  resize window for things to go back to normal
window.addEventListener('resize', () => {
    if(this.innerWidth > 1060){
        comments.forEach(c => c.style.display = 'flex')
    }else if(this.innerWidth < 556){
        removeAllCarouselBulletBackground()
        carouselBullets.forEach((cb,i) => {
            carouselBullets[1].classList.add('carousel-bullet-active')
            if(!cb.classList.contains('carousel-bullet-active')){
                comments[i].style.display = 'none'
            }
        })
    }else if(
        this.innerWidth < 1060 &&
        this.innerWidth > 556
    ){
        comments.forEach(c => {
            c.style.display = 'flex'
            c.style.flexDirection = 'column'
        })
    }
})

