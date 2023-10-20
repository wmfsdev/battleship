import './style.css';
import newGame from "./game"


document.addEventListener('DOMContentLoaded', () => { 
  
    const game = newGame()
    game.ship()
    game.dom()
    game.humanPlay()
})