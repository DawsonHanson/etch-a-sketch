console.log('Test!')
const answer = Number(prompt('number') **2)
console.log(answer)

function createGrid (value) {
  const sketchPad = document.querySelector('.background-grey')
  const styleValue = Math.sqrt(389376/answer)
  for (let x = 1; x <= value; x++) {
   const square = document.createElement('div')
   square.classList.add('square')
   square.style.width = `${styleValue}px`
   square.style.height = `${styleValue}px`
   sketchPad.appendChild(square)
  }
}

createGrid(answer)
