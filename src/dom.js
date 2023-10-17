import { Gameboard, Player } from "./factories"
import newGame from "./game"


const render = {

    board: (player) => {
     //   console.log(player)
    const board = player.board.getBoard()
     //   console.log(board)

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
        
        shipList.forEach(ship => {
        
            for (let i = 0 ; i < ship.length ; i++) {
            
                let shipCell = document.querySelector(`.cell[data-index-zero='${ship[i][0]}'][data-index-one='${ship[i][1]}']`)
                if (player === "human") {
                    shipCell.classList.add('ship')
                }
            }
        });
    },

}

export default render 


// ships: (player, shipList) => {
//     console.log(shipList)
//     shipList.forEach(ship => {
//         console.log(ship)
        
//         for (let i = 0 ; i < shipList[0].length ; i++) {
        
//             let shipCell = document.querySelector(`.cell[data-index-zero='${shipList[0][i][0]}'][data-index-one='${shipList[0][i][1]}']`)
//             if (player === "human") {
//                 shipCell.classList.add('ship')
//             }
//         }
//     });
// },


