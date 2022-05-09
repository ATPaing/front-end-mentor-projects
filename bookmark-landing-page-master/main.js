const featureTabLinks = document.querySelectorAll('.tab-links')
const tabImg = document.getElementById('tabImg')
const tabInfoH3 = document.getElementById('tabInfoH3')
const tabInfoP = document.getElementById('tabInfoP')

const questionNames = document.querySelectorAll('.question-name')
const answerSection = document.querySelectorAll('.answer')
const expandBtns = document.querySelectorAll('.expand-button')

const hamburgerToggle = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close-btn')
const mobileNav = document.querySelector('.mobile-nav')

const answers = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,`Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`,`Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.`,`Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui Aliquam vitae neque eget nisl gravida pellentesque non ut velit.`]

const tabInfoH3Arr = ['Bookmark in one click','Intelligent search','Share your bookmarks']

const tabInfoPArr = [` Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`,`Our powerful search feature will help you find saved sites in no time at all. 
No need to trawl through all of your bookmarks.`,`Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`]


featureTabLinks.forEach((FTL,i) => {
    FTL.addEventListener('click' , () => {
        console.log(FTL)
        console.log(i)
        removeAllActiveTabNav()

        FTL.classList.add('active-tab-nav')
        tabImg.innerHTML = `<img src="images/illustration-features-tab-${i + 1}.svg" alt="feature section tab 1 img">
        `
        tabInfoH3.textContent = tabInfoH3Arr[i]
        tabInfoP.textContent = tabInfoPArr[i]
     
    })
})
function removeAllActiveTabNav(){
    for(let i = 0; i < featureTabLinks.length ; i++){
        featureTabLinks[i].classList.remove('active-tab-nav')
    }
}

console.log(questionNames)

questionNames.forEach((questionName,i) => {
    questionName.addEventListener('click', () => {

      // toggle 
       questionName.classList.toggle('active-question')

       // change display of answerSection
       let display =  questionName.classList.contains('active-question') ? 'block' : 'none'
       answerSection[i].style.display = display

        // get the number for transition to work
        const originalRect = questionName.getBoundingClientRect()
        const originalHeight = originalRect.height
        questionName.style.maxHeight = `${originalHeight}px`

        // change arrow logo
        expandBtns[i].innerHTML = `
        <img src="images/arrow-clr-changed.svg" class="expand-button-img" alt="expand btn">
        `
        
        // add answer to answer section
        answerSection[i].innerHTML = `<p>${answers[i]}</p>`

        // get the number for transition to work
        const changedRect = answerSection[i].getBoundingClientRect()
        const changedHeight = changedRect.height
        questionName.style.maxHeight = `${originalHeight + changedHeight}px`

        if(!questionName.classList.contains('active-question')){
            expandBtns[i].innerHTML = `
            <img src="images/icon-arrow.svg" class="expand-button-img" alt="expand btn">
            `
            answerSection[i].innerHTML = ``
        }
    })
})

// make toggle btn works
hamburgerToggle.addEventListener('click', () => {
    mobileNav.classList.add('active-mobile-nav');
})

// close btn for toggle
closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active-mobile-nav');
})
