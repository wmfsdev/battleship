import { Player, Ship } from "./factories"
import render from "./dom"

function newGame() {
    let playerOne = Player()
    let playerTwo = Player()
   
    playerOne.board.placeShip([[0, 0]], Ship(1))
    playerOne.board.placeShip([[1, 1]], Ship(1))

    playerTwo.board.placeShip([[2, 2]], Ship(1))
    
    render.board(playerOne)
    render.board(playerTwo)

    render.ships("ai", playerTwo.board.getOccupiedPositions())
    render.ships("human", playerTwo.board.getOccupiedPositions())


 //   console.log(playerOne.board.getBoard())
 //   console.log(playerOne, PlayerTwo)
}

// first move: human/playerOne
// eventListener => player.attackEnemy()


export default newGame