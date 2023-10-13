import render from "./dom"
import newGame from "./game"


document.addEventListener('DOMContentLoaded', () => { 
    newGame()
    render.board() 
})