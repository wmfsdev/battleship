import newGame from "./game"

const render = {

    board: (player, type) => {
        const board = player.board.getBoard()
        const container = document.querySelector('.container')
        const playerBoard = document.createElement('div')
        playerBoard.classList.add(`board-${type}`)

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
            
                let shipCell = document.querySelector(`.board-${player} .cell[data-index-zero='${ship[i][0]}'][data-index-one='${ship[i][1]}']`)
                if (player === "human") {
                    shipCell.classList.add('ship')
                }
            }
        });
    },

    misses: (player, playerType) => {
        const missedShots = player.board.getMissedShots()
        missedShots.forEach((miss) => {
            let missedCell = document.querySelector(`.board-${playerType} .cell[data-index-zero='${miss[0]}'][data-index-one='${miss[1]}']`)
            missedCell.classList.add('miss')
        })

    },

    hits: (player, playerType) => {  
        const hitShips = player.board.getHitShips()
        hitShips.forEach((ship) => {
            let hitCell = document.querySelector(`.board-${playerType} .cell[data-index-zero='${ship[0]}'][data-index-one='${ship[1]}']`)
            hitCell.classList.add('hit-ship')
        })
    },

    result: (type) => {
        const body = document.querySelector('body')
        const result = document.createElement('div')
        const button = document.createElement('button')

        result.classList.add('result')
        result.textContent = `${type} WINS!`
        button.textContent = "New Game"

        body.appendChild(result)
        result.appendChild(button)

        button.addEventListener('click', (e) => {
            const game = newGame()
            game.end()
            game.ship()
            game.dom()
            game.humanPlay()
        })
    },

    clearBoards: () => {
        const container = document.querySelector('.container')
        const playerOne = document.querySelector('.board-human')
        const playerTwo = document.querySelector('.board-ai')
        const result = document.querySelector('.result')
        document.body.removeChild(result)
        container.removeChild(playerOne)
        container.removeChild(playerTwo)
    }

}

export default render