const snakeNames = require ('snake-names')
let namePicked = snakeNames.random()
console.log('You should name this snake:', namePicked)

let maleSnakeNames = snakeNames.male
let randomIndex= Math.floor(Math.random()* maleSnakeNames.length)
console.log('I know a guy name:', maleSnakeNames[randomIndex])