import { Player, Ship } from "./factories"
import render from "./dom"

function newGame() {
    let playerOne = Player()
    let playerTwo = Player()
   
   // playerOne.board.placeShip([[0, 0]], Ship(1))
   // playerOne.board.placeShip([[1, 1]], Ship(1))

    //playerTwo.board.placeShip([[2, 2]], Ship(1))
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), Ship(3))

    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), Ship(3))

    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), Ship(3))

    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), Ship(3))






 //   console.log(playerOne.board.getOccupiedPositions())
    render.board(playerOne)
    render.board(playerTwo)

//console.log(playerOne.board.getBoard())

   // render.ships("ai", playerTwo.board.getOccupiedPositions())
    render.ships("human", playerOne.board.getOccupiedPositions())


 //   console.log(playerOne.board.getBoard())
 //   console.log(playerOne, PlayerTwo)
}

// first move: human/playerOne
// eventListener => player.attackEnemy()


export default newGame