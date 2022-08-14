console.log('Test!')

const gridButton = document.querySelector('.grid-button')
gridButton.addEventListener('click', () => {
  location.reload()
})

window.onload = createGrid()

function createGrid () {
  const answer = Number(prompt('Grid Size') **2)
  const sketchPad = document.querySelector('.background-grey')
  const styleValue = Math.sqrt(389376/answer)
  for (let x = 1; x <= answer; x++) {
   const square = document.createElement('div')
   square.classList.add('square')
   square.style.width = `${styleValue}px`
   square.style.height = `${styleValue}px`
   sketchPad.appendChild(square)
  }
}

// change colors 

const redButton = document.querySelector('.button-red')
const orangeButton = document.querySelector('.button-orange')
const yellowButton= document.querySelector('.button-yellow')
const greenButton = document.querySelector('.button-green')
const blueButton = document.querySelector('.button-blue')
const indigoButton = document.querySelector('.button-indigo')
const violetButton = document.querySelector('.button-violet')
const whiteButton = document.querySelector('.button-white')
const blackButton = document.querySelector('.button-black')
const randomButton = document.querySelector('.button-random')

const squares = document.querySelectorAll('.square')

redButton.addEventListener('click', red)

function red () {
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.classList.add('square-red')
      square.classList.remove('square-orange')
      square.classList.remove('square-yellow')
      square.classList.remove('square-green')
      square.classList.remove('square-blue')
      square.classList.remove('square-indigo')
      square.classList.remove('square-violet')
      square.classList.remove('square')
      square.classList.remove('square-black')
      square.classList.remove('square-random')
    })
  })
}

orangeButton.addEventListener('click', orange)

function orange () {
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.classList.add('square-orange')
      square.classList.remove('square-red')
      square.classList.remove('square-yellow')
      square.classList.remove('square-green')
      square.classList.remove('square-blue')
      square.classList.remove('square-indigo')
      square.classList.remove('square-violet')
      square.classList.remove('square')
      square.classList.remove('square-black')
      square.classList.remove('square-random')
    })
  })
}

yellowButton.addEventListener('click', yellow)

function yellow() {
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.classList.add('square-yellow')
      square.classList.remove('square-orange')
      square.classList.remove('square-red')
      square.classList.remove('square-green')
      square.classList.remove('square-blue')
      square.classList.remove('square-indigo')
      square.classList.remove('square-violet')
      square.classList.remove('square')
      square.classList.remove('square-black')
      square.classList.remove('square-random')
    })
  })
}

greenButton.addEventListener('click', green)

function green() {
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.classList.add('square-green')
      square.classList.remove('square-orange')
      square.classList.remove('square-yellow')
      square.classList.remove('square-red')
      square.classList.remove('square-blue')
      square.classList.remove('square-indigo')
      square.classList.remove('square-violet')
      square.classList.remove('square')
      square.classList.remove('square-black')
      square.classList.remove('square-random')
    })
  })
}

blueButton.addEventListener('click', blue)

function blue () {
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.classList.add('square-blue')
      square.classList.remove('square-orange')
      square.classList.remove('square-yellow')
      square.classList.remove('square-green')
      square.classList.remove('square-red')
      square.classList.remove('square-indigo')
      square.classList.remove('square-violet')
      square.classList.remove('square')
      square.classList.remove('square-black')
      square.classList.remove('square-random')
    })
  })
}

indigoButton.addEventListener('click', indigo)

function indigo() {
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.classList.add('square-indigo')
      square.classList.remove('square-orange')
      square.classList.remove('square-yellow')
      square.classList.remove('square-green')
      square.classList.remove('square-blue')
      square.classList.remove('square-red')
      square.classList.remove('square-violet')
      square.classList.remove('square')
      square.classList.remove('square-black')
      square.classList.remove('square-random')
    })
  })
}

violetButton.addEventListener('click', violet)

function violet() {
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.classList.add('square-violet')
      square.classList.remove('square-orange')
      square.classList.remove('square-yellow')
      square.classList.remove('square-green')
      square.classList.remove('square-blue')
      square.classList.remove('square-indigo')
      square.classList.remove('square-red')
      square.classList.remove('square')
      square.classList.remove('square-black')
      square.classList.remove('square-random')
    })
  })
}

whiteButton.addEventListener('click', white)

function white() {
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.classList.add('square')
      square.classList.remove('square-orange')
      square.classList.remove('square-yellow')
      square.classList.remove('square-green')
      square.classList.remove('square-blue')
      square.classList.remove('square-indigo')
      square.classList.remove('square-violet')
      square.classList.remove('square-red')
      square.classList.remove('square-black')
      square.classList.remove('square-random')
    })
  })
}

blackButton.addEventListener('click', black)

function black() {
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.classList.add('square-black')
      square.classList.remove('square-orange')
      square.classList.remove('square-yellow')
      square.classList.remove('square-green')
      square.classList.remove('square-blue')
      square.classList.remove('square-indigo')
      square.classList.remove('square-violet')
      square.classList.remove('square')
      square.classList.remove('square-red')
      square.classList.remove('square-random')
    })
  })
}

randomButton.addEventListener('click', random)

function random() {
  squares.forEach(square => {
    let randomRGB = (min, max) => min + Math.floor(Math.random() * (max - min + 1))
    let r = randomRGB(0, 255);
    let g = randomRGB(0, 255);
    let b = randomRGB(0, 255);
    let rgb = `rgb(${r},${g},${b})`
    document.documentElement.style.setProperty('--color', `${rgb}`)
    console.log (rgb);

    square.addEventListener('mouseover', () => {
      square.classList.add('square-random')
      square.classList.remove('square-orange')
      square.classList.remove('square-yellow')
      square.classList.remove('square-green')
      square.classList.remove('square-blue')
      square.classList.remove('square-indigo')
      square.classList.remove('square-violet')
      square.classList.remove('square')
      square.classList.remove('square-black')
      square.classList.remove('square-red')
    })
  })
}