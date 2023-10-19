
const Ship = (shipLength) => {

    let hits = 0;

    const length = shipLength;

    const getHits = () => hits;

    const hit = () => {
        hits++
        return hits
    };

    const isSunk = () => {
        if (hits < length) {
         //   console.log("not sunk")
            return false
        } else {
          //  console.log("sunk")
            return true
        }
    };

    return { length, hit, getHits, isSunk };
};


// -- GAMEBOARD ---

const Gameboard = () => { // will take player/comp name

    let board = [
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true] ];

    const occupiedPositions = []
    const hitShips = [];
   // const viablePositions = [];
    const shipList = [];
    const missedShots = [];

    const randomStart = []

    const sunkenStatus = () => {
        for (let i = 0 ; i < shipList.length ; i++) {
            if (shipList[i].isSunk() === false) {
                return false
            }
        }
        return true
    };

    const getRandomStart = () => {
        console.log(randomStart)
        return randomStart
    }

    const randomShipPlacement = (length) => {
        let indexZero = getRandomInt(10)
        let indexOne = getRandomInt(10)
        let shipPosition = []
        let shipCollision;

        if (indexZero + length > 10) {
        //    console.log("plus")

            for (let i = 0 ; i < length ; i++) {      
                shipPosition.push([indexZero - i, indexOne])
            }
            const flatRandom = randomStart.flat()

                for (let i = 0 ; i < shipPosition.length ; i++) {
                    for (let j = 0 ; j < flatRandom.length ; j++) {
                        if (flatRandom[j][0] === shipPosition[i][0] && flatRandom[j][1] === shipPosition[i][1]) {
                          //  console.log("clash")
                            shipCollision = true
                        }
                    }
                }
                if (!shipCollision) {
                    randomStart.push(shipPosition)
                } else randomShipPlacement(length)

        } else {
        //    console.log("minus")
            
            for (let i = 0 ; i < length ; i++) {      
                shipPosition.push([indexZero + i, indexOne])
            }
            const flatRandom = randomStart.flat()

                for (let i = 0 ; i < shipPosition.length ; i++) {
                    for (let j = 0 ; j < flatRandom.length ; j++) {
                        if (flatRandom[j][0] === shipPosition[i][0] && flatRandom[j][1] === shipPosition[i][1]) {
                          //  console.log("clash")
                            shipCollision = true
                        }
                    }
                }
                if (!shipCollision) {
                    randomStart.push(shipPosition)
                } else randomShipPlacement(length)
        }

        shipPosition = randomStart[randomStart.length - 1]
        return shipPosition
    };


    // const getPositions = (length, operator, indexZero = getRandomInt(10), indexOne = getRandomInt(10)) => {
    //     let shipPosition = []

    //     if (operator === "plus") {

    //         for (let i = 0 ; i < length ; i++) {
    //             randomStart.forEach((ele) => {
    //                 if (ele.includes(indexZero - i) && ele.includes(indexOne)) {
                     
    //                 }
    //             })
    //             shipPosition.push([indexZero - i, indexOne])
    //         }
    //     } else if (operator === "minus") {

    //         for (let i = 0 ; i < length ; i++) {
    //             randomStart.forEach((ele) => {
    //                 if (ele.includes(indexZero + 1) && ele.includes(indexOne)) {
                   
    //                 }
    //             })
    //             shipPosition.push([indexZero + i, indexOne])
    //         }
    //     }
    //     console.log(shipPosition)
    //     return shipPosition
    // };

    const getRandomInt = (val) => {
        return Math.floor(Math.random() * val);
    };

    const placeShip = (shipPosition, ship) => {
        shipPosition.forEach(position => {
            board[position[0]][position[1]] = ship
        });
        shipList.push(ship)
        occupiedPositions.push(shipPosition)
    };

    const receiveAttack = (x, y) => {
        
        if (board[x][y] instanceof Object) {
            board[x][y].hit()
            hitShips.push([x, y]) // hits
        }
        else missedShots.push([x, y]) // misses
        
    };

    const updateBoard = (player, coordinates) => {
        const target = player.board.getBoard()[coordinates[0]][coordinates[1]]
        console.log(target)
        player.board.getBoard()[coordinates[0]][coordinates[1]] = false
    }

    const getOccupiedPositions = () => occupiedPositions
    const getShipList = () => shipList;
    const getBoard = () => board;
    const getMissedShots = () => missedShots;
    const getHitShips = () => hitShips

    return { updateBoard, getHitShips, getRandomStart, randomShipPlacement, getOccupiedPositions, getShipList, placeShip, getBoard, receiveAttack, getMissedShots, sunkenStatus }

};

// --- PLAYER ---

const Player = () => {

    let board = Gameboard();

    const attackEnemy = (enemy, coodOne, coodTwo) => {
        console.log(enemy, coodOne, coodTwo)
        enemy.board.receiveAttack(coodOne, coodTwo)
    };

    const viableTargets = [];

    const random = () => { return Math.floor(Math.random() * viableTargets.length) }

    const generateTargets = () => {
        for (let i = 0 ; i < 10 ; i++) {
            for (let j = 0 ; j < 10 ; j++) {
                viableTargets.push([i,j])
            }
        } 
    };

    const removeViableTarget = (index) => {
        viableTargets.splice(index, 1)
    };

    const aiMove = (enemy) => {
        const randomIndex = random()
        const target = viableTargets[randomIndex]
        attackEnemy(enemy, target[0], target[1])
        removeViableTarget(randomIndex)

    };

    const getViableTargets = () => viableTargets;

    return { board, aiMove, generateTargets, getViableTargets, removeViableTarget, attackEnemy }
}



export { Ship, Gameboard, Player }

