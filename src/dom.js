import { Gameboard, Player } from "./factories"
import newGame from "./game"


const render = {

    board: (player) => {
        console.log(player)
    const board = player.board.getBoard()
        console.log(board)

    const container = document.querySelector('.container')
    const playerBoard = document.createElement('board')
    playerBoard.classList.add('board')

    for (let i = 0 ; i < 10 ; i++) {
        for (let j = 0 ; j < 10 ; j++) {
            let cell = document.createElement('div')
            cell.className = "cell"
            cell.dataset.indexZero = i
            cell.dataset.indexOne = j
            playerBoard.appendChild(cell)
        }
    }

    container.appendChild(playerBoard)
    
    },
    
    ships: (player, shipList) => {
        console.log(shipList)
        shipList.forEach((ship) => {
            console.log(ship)
            const shipCell = document.querySelector(`.cell[data-index-zero='${ship[0][0]}'][data-index-one='${ship[0][1]}']`)
            if (player === "human") {
                shipCell.classList.add('ship')
            }
        });

    }

}

export default render 



