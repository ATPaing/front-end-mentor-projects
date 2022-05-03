const hamburgerBtn = document.getElementById('hamburgerBtn')
const hamburgerCloseBtn = document.getElementById('hamburgerClose')
const nav = document.querySelector('nav')

const mainPage = document.getElementById('mainPage')
const desOne = document.getElementById('desOne')
const descTwo = document.getElementById('descTwo')
const nextSlide = document.getElementById('nextSlide')
const previousSlide = document.getElementById('previousSlide')

let imageCurrentPosition = 1

const desOneContents = ['Discover innovative ways to decorate','We are available all across the globe','Manufactured with the best materials']

const desTwoContents = [`We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,`With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`]

hamburgerBtn.addEventListener('click', () => {
    nav.style.transform = 'scale(1,1)'
})
hamburgerCloseBtn.addEventListener('click',() => {
    nav.style.transform = 'scale(1,0)'
})

nextSlide.addEventListener('click',() => {
    imageCurrentPosition++

    if(imageCurrentPosition > 3){
        imageCurrentPosition = 1
    }
    changeSllide()


})

previousSlide.addEventListener('click',() => {
    imageCurrentPosition--

    if(imageCurrentPosition < 1){
        imageCurrentPosition = 3
    }
    changeSllide()

})

window.addEventListener('resize', () => {
    changeSllide()
})

function changeSllide(){
    mainPage.style.backgroundImage = `url("images/desktop-image-hero-${imageCurrentPosition}.jpg")`
    desOne.textContent = desOneContents[imageCurrentPosition - 1]
    descTwo.textContent = desTwoContents[imageCurrentPosition - 1]

}