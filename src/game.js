import { Player, Ship } from "./factories"
import render from "./dom"

const newGame = () => {

  let playerOne = Player();
  let playerTwo = Player();

  const ship = () => {
    // Player One - HUMAN
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(4), Ship(4))
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), Ship(3))
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), Ship(3))
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(3), Ship(3))
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(2), Ship(2))
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(1), Ship(1))
    playerOne.board.placeShip(playerOne.board.randomShipPlacement(1), Ship(1))
    // Player Two - AI
    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(4), Ship(4))
    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(3), Ship(3))
    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(3), Ship(3))
    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(3), Ship(3))
    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(2), Ship(2))
    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(1), Ship(1))
    playerTwo.board.placeShip(playerTwo.board.randomShipPlacement(1), Ship(1))
    // console.log(playerTwo.board.getBoard())
  };

  const dom = () => {
    render.board(playerOne, "human")
    render.board(playerTwo, "ai")
    render.ships("human", playerOne.board.getRandomStart())
    render.ships("ai", playerTwo.board.getRandomStart())
  };


  const humanPlay = () => {
    console.log("--- HUMAN ----")
    const human = document.querySelector('.board-ai')
    human.addEventListener('click', function eventHandler(e) {
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
      human.removeEventListener('click', eventHandler)
      if (checkWinCon(playerTwo, "HUMAN")) {
        return
      } else aiPlay()
    })
  };

  const aiPlay = () => {
    console.log("--- AI ---")
    if (playerTwo.getViableTargets().length === 0) {
      playerTwo.generateTargets()
    }
    playerTwo.aiMove(playerOne)
    render.hits(playerOne, "human")
    render.misses(playerOne, "human")
    if (checkWinCon(playerOne, "AI")) {
      return
    } else humanPlay()
  };

  const checkWinCon = (player, type) => {
    if (player.board.sunkenStatus() === true) {
      render.result(type)
      return true
    }
  }

  const start = () => {
    ship()
    dom()
    humanPlay()
  }

  const end = () => {
    render.clearBoards()
  }
  
  return { end, start, checkWinCon, ship, dom, humanPlay }
};

export default newGame