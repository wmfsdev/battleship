import './style.css';
//import render from "./dom"
import newGame from "./game"


document.addEventListener('DOMContentLoaded', () => { 
    const game = newGame()
    game.ship()
    game.dom()
    game.humanPlay()
   
    //  console.log(game.count)

})