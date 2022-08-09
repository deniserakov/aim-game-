const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList= document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const colors = ['#e74c3c' , '#8e44ad ', '#3498db' , '#e67e22' , '#2ecc71' ,'#FF69B4	' ,'#DC143C', 'DarkCyan' , '#2E8B57', '#BC8F8F']
const board = document.querySelector('#board')
let time = 0
let score = 0


startBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', e=>{
if(e.target.classList.contains('time-btn')){
    time = parseInt(e.target.getAttribute(('data-time')))
    screens[1].classList.add('up')
    startGame()
}

})

board.addEventListener('click', e=>{
    if(e.target.classList.contains('circle')){
        score++
        e.target.remove()
        createRandomCircle()
      
    }
   
})


function startGame(){
    setInterval(decreseTime , 1000)
    createRandomCircle()
    setTime(time) 
    // winTheClicker()
}

function decreseTime(){
    if(time ===0){
        finishGame()
    } else{
        let carrent =--time 
        if(carrent<10 ){
            carrent= `0${carrent}`
        }
        setTime(carrent)
    }

   
}

function setTime(value){
    timeEl.innerHTML=`00:${value}`
}

function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML=`<h1>  Счет:<span class="primary"> ${score} </span></h1>`
}

function createRandomCircle(){
    const{width , height} =board.getBoundingClientRect()
    const circle = document.createElement('div')
    const size = getRandomNumber(10,60)
    const x= getRandomNumber(0, width- size)
    const y=getRandomNumber(0, height- size)

   

    circle.classList.add('circle')
    circle.style.width=`${size}px`
    circle.style.height=`${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}

function getRandomNumber(min , max){
  return  Math.round (Math.random()*(max - min) + min)
}
//////////////////////////////////////
function winTheClicker(){
    function kill (){
        const circle = document.querySelector('.circle')
        if(circle){
            circle.click()
        }
    }
    setInterval(kill , 10)
}
