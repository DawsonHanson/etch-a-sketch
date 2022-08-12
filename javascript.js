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