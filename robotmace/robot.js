const fs = require("fs")
const maceText = fs.readFileSync("./mace.txt").toString('utf-8')
const mace = maceText.split("\n")

let count = 0
let direction = 'up'
let row = mace.findIndex(a => a.includes('S'))
let col = mace[row].search('S')

console.log('start location ', row + ' - ' + col)

const changeDirection = () => {
  count--
  switch(direction) {
    case 'up':
      direction = 'right'
      return
    case 'right':
      direction = 'down'
      return
    case 'down':
      direction = 'left'
      return
    default:
      direction = 'up'
      return
  }
} 

while(mace[row][col] !== 'E'){
  switch (direction){
    case 'up':
      if(mace[row-1][col] === '#') {
        changeDirection()
        break
      }
      row--
      break
    case 'right':
      if(mace[row][col+1] === '#') {
        changeDirection()
        break
      }
      col++
      break
    case 'down':
      if(mace[row+1][col] === '#') {
        changeDirection()
        break
      }
      row++
      break
    case 'left':
      if(mace[row][col-1] === '#') {
        changeDirection()
        break
      }
      col--
      break
    default:
      break
  }
  count++
}
console.log('end location ', row + ' - ' + col)
console.log('move count ', count)
console.log('answer:', mace[0].trim() + ':' + count)