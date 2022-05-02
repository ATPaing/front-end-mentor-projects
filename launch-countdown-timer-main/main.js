const day = document.getElementById('day')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')



function countDown(){
    second.textContent--
    if(second.textContent < 10){
        second.textContent = `0${second.textContent}`
    }
    if(
        minute.textContent !== '00' &&
        second.textContent === '00'
    ){
        console.log('working1')
        minute.textContent--

        second.textContent = 60
        if(second.textContent < 10){
            second.textContent = `0${second.textContent}`
        }

        if(minute.textContent < 10){
            minute.textContent = `0${minute.textContent}`
        }

        if(
            hour.textContent !== '00' &&
            minute.textContent === '00'
        ){
           
            hour.textContent--
            if(hour.textContent < 10){
                hour.textContent = `0${hour.textContent}`
            }

            minute.textContent = 59
            if(minute.textContent < 10){
                minute.textContent = `0${minute.textContent}`
            }

            if( day.textContent !== '00' &&
                hour.textContent === '00'
             ){
                day.textContent--
                if(day.textContent < 10){
                    day.textContent = `0${day.textContent}`
                }

                hour.textContent = 23 
                if(hour.textContent < 10){
                    hour.textContent = `0${hour.textContent}`
                }

                if(day.textContent === '00'){
                    day.textContent = '00'             
                }
  
            }else if(
              day.textContent === '00' &&
              hour.textContent === '00'
            ){
                day.textContent = '00' 
                hour.textContent = '00'
            }
        }else if(            
          hour.textContent === '00' &&
          minute.textContent === '00'
        ){
            
            hour.textContent = '00'
            minute.textContent = '00'
        }
    }else if(
        minute.textContent === '00' &&
        second.textContent === '00'
    ){
        console.log('working2')
        minute.textContent = '00'
        second.textContent = '00'
        clearInterval(myInterval)
    }

}

const myInterval = setInterval(countDown,1000)
// countDown()