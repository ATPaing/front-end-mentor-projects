const menuBtn = document.getElementById('menuBtn')
const menuSection = document.getElementById('menuSection')
const closeBtn = document.getElementById('closeBtn')
const cartBtn = document.getElementById('cartBtn')
const cartDisplay = document.getElementById('cartDisplay')
const previousBtn = document.getElementById('previousBtn')
const nextBtn = document.getElementById('nextBtn')
const productImage = document.getElementById('productImage')
const minusBtn = document.getElementById('minusBtn')
const plusBtn = document.getElementById('plusBtn')
const totalNumberOfSneakers = document.getElementById('totalNumberOfSneakers')
const addToCartBtn = document.getElementById('addToCartBtn')
const cartDisplayContent = document.getElementById('cartDisplayContent')
const checkOutSecondRow = document.getElementById('checkOutSecondRow')
const totalNumber = document.getElementById('totalNumber')
const totalPrice = document.getElementById('totalPrice')
const checkOutBtn = document.getElementById('checkOutBtn')
const deleteBtn = document.getElementById('deleteBtn')
const cardBtnNoti = document.getElementById('cardBtnNoti')
const thumbImages = document.querySelectorAll('.thumb-image')
const currentDiscountedPrice = 125.00

let carouselPosition = 1
let currentChoseSneakersNumber = 0

let cartEmpty = true

// for menu btn
menuBtn.addEventListener('click', ()=>{
    menuSection.style.transform =    "translateX(0)"

})
closeBtn.addEventListener('click',()=>{
    menuSection.style.transform = "translateX(-100%)"
})

// for add to cart btn
addToCartBtn.addEventListener('click',() => {
    cartEmpty = false
    if(currentChoseSneakersNumber === 0){
        cardBtnNoti.style.backgroundColor = "transparent"
        cardBtnNoti.textContent = ""
        return
    }
    cardBtnNoti.style.backgroundColor = "hsl(26, 100%, 55%)"
    cardBtnNoti.textContent = currentChoseSneakersNumber
})

// for cart btn
 cartBtn.addEventListener('mouseover',() => {
    checkIfItemQuantityIsZero()
    if(window.innerWidth < 528){
        if(cartEmpty){
            cartDisplay.style.transform = "scale(1,1)"
            cartDisplayContent.style.display = "block"
            checkOutSecondRow.style.display = "none"
            cartBtn.addEventListener('mouseout',myMouseOut)
        }else if(!cartEmpty){
            console.log('working hover')
            cartDisplay.style.transform = "scale(1,1)"
            cartDisplayContent.style.display = "none"
            checkOutSecondRow.style.display = "flex"
            cartBtn.removeEventListener('mouseout',myMouseOut)
        }
    }else if(window.innerWidth > 528){
        if(cartEmpty){
            cartDisplay.style.transform = " scale(1,1)"
            cartDisplayContent.style.display = "block"
            checkOutSecondRow.style.display = "none"
            cartBtn.addEventListener('mouseout',myMouseOut)
        }else if(!cartEmpty){
            cartDisplay.style.transform = "scale(1,1)"
            cartDisplayContent.style.display = "none"
            checkOutSecondRow.style.display = "flex"
            cartBtn.removeEventListener('mouseout',myMouseOut)
        }
    }

    })


cartBtn.addEventListener('click',() => {
    if(window.innerWidth < 528){
        if(cartEmpty){
            cartDisplay.style.transform = "scale(1,1)"
            checkOutSecondRow.style.display = "none"
        }else if(!cartEmpty){
            console.log('working click')
            cartDisplay.style.transform = "scale(1,1)"
            cartDisplayContent.style.display = "none"
            checkOutSecondRow.style.display = "flex"
        }
    }else if(window.innerWidth > 528){
        if(cartEmpty){
            cartDisplay.style.transform = " scale(1,1)"
            checkOutSecondRow.style.display = "none"
        }else if(!cartEmpty){
            cartDisplay.style.transform = "scale(1,1)"
            cartDisplayContent.style.display = "none"
            checkOutSecondRow.style.display = "flex"
        }
    }


})

function myMouseOut() {
    if(window.innerWidth < 528){
        cartDisplay.style.transform = "scale(0,0)"
    }else if(window.innerWidth > 528){
        cartDisplay.style.transform = "scale(1,0)"
    }

}

// for carousel btn
nextBtn.addEventListener('click',() => {
    carouselPosition++
    if(carouselPosition === 5){
        carouselPosition = 1
    }
    changeImage()

})
previousBtn.addEventListener('click',() => {
    carouselPosition--
    if(carouselPosition === 0){
        carouselPosition = 4
    }
    changeImage()
})


function changeImage(){
    productImage.style.animation = "translateX 360ms ease-in-out"
    if(carouselPosition === 1){
        productImage.src = "images/image-product-1.jpg"
    }else if(carouselPosition === 2){
        productImage.src = "images/image-product-2.jpg"
    }else if(carouselPosition === 3){
        productImage.src = "images/image-product-3.jpg"
    }else if(carouselPosition === 4){
        productImage.src = "images/image-product-4.jpg"
    }
}

// for item increment and decrement btn
plusBtn.addEventListener('click',() => {
    currentChoseSneakersNumber++
    totalNumber.textContent = currentChoseSneakersNumber
    totalNumberOfSneakers.textContent = currentChoseSneakersNumber
    checkIfItemQuantityIsZero()
    priceCalculation()
})

minusBtn.addEventListener('click',() => {
    currentChoseSneakersNumber--
    if(currentChoseSneakersNumber < 0){
        currentChoseSneakersNumber = 0
    }
    totalNumber.textContent = currentChoseSneakersNumber
    totalNumberOfSneakers.textContent = currentChoseSneakersNumber
    checkIfItemQuantityIsZero()
    priceCalculation()
})

// for total price
function priceCalculation(){
    totalPrice.textContent = currentChoseSneakersNumber * currentDiscountedPrice
}

function checkIfItemQuantityIsZero(){
    if(currentChoseSneakersNumber === 0){
        cartEmpty = true
    }
}

// for checkout btn

checkOutBtn.addEventListener('click', () => {
    if(window.innerWidth < 528){
        cartDisplay.style.transform = "scale(0,0)"
    }else if(window.innerWidth > 528){
        cartDisplay.style.transform = "scale(1,0)"
    }

})

// for delete btn

deleteBtn.addEventListener('click', () => {
    currentChoseSneakersNumber = 0
    totalNumber.textContent = currentChoseSneakersNumber
    totalNumberOfSneakers.textContent = currentChoseSneakersNumber
    cardBtnNoti.style.backgroundColor = "transparent"
    cardBtnNoti.textContent = ""
    priceCalculation()
    checkIfItemQuantityIsZero()
    if(window.innerWidth < 528){
        cartDisplay.style.transform = "scale(0,0)"
    }else if(window.innerWidth > 528){
        cartDisplay.style.transform = "scale(1,0)"
    }
})

// for thumb images in window size
thumbImages.forEach(thumbImage => {
    thumbImage.addEventListener('click',() => {
        for(let index of thumbImages){
            index.classList.remove('active')
        }
        thumbImage.classList.add('active')
        if(thumbImage === thumbImages[0]){
            productImage.src= "images/image-product-1.jpg"
        }else if(thumbImage === thumbImages[1]){
            productImage.src= "images/image-product-2.jpg"
        }else if(thumbImage === thumbImages[2]){
            productImage.src= "images/image-product-3.jpg"
        }else if(thumbImage === thumbImages[3]){
            productImage.src= "images/image-product-4.jpg"
        }
    })
})
