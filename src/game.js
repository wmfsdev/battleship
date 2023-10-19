import { Player, Ship } from "./factories"
import render from "./dom"


const newGame = () => {

  let playerOne = Player();
  let playerTwo = Player();

  const ship = () => {
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(4), Ship(4))
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), Ship(3))
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), Ship(3))
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(2), Ship(2))
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(1), Ship(1))
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(1), Ship(1))
      // player two
    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(4), Ship(4))
    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(3), Ship(3))
    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(3), Ship(3))
    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(2), Ship(2))
    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(1), Ship(1))
    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(1), Ship(1))
  };

  const dom = () => {
    render.board(playerOne, "human")
    render.board(playerTwo, "ai")
    render.ships("human", playerOne.board.getRandomStart())
    render.ships("ai", playerTwo.board.getRandomStart())
  };

  const humanPlay = () => {
    const human = document.querySelector('.board-ai')
    human.addEventListener('click', (e) => {
      const coordinates = [Number(e.target.dataset.indexZero), Number(e.target.dataset.indexOne)]
      const target = playerTwo.board.getBoard()[coordinates[0]][coordinates[1]]
      if (target === false) {
        console.log("nope!")
        return
      }
      playerOne.attackEnemy(playerTwo, coordinates[0], coordinates[1])
      playerOne.board.updateBoard(playerTwo, coordinates)
      render.hits(playerTwo, "ai")
      render.misses(playerTwo, "ai")
      console.log(playerTwo.board.sunkenStatus())
      // enemy move
    })
  };
 

  return { ship, dom, humanPlay }
};



//    // 1. get index position
//    // 2. calls attackEnemy with index position
//    // 3. check hitShips array, render hit index positions
//    // 4. check shotsFired array, render misses
//    // 5. check isSunk of index - render? - DON'T NEED
//    // 6. check sunkenStatus (entire board)
//    // 7. enemy turn

// first move: human/playerOne
// eventListener => player.attackEnemy()


export default newGame