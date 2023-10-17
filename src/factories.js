
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
            return false
        } else return true
    };

    return { length, hit, getHits, isSunk };
};


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

    const viablePositions = [];
    const shipList = [];
    const shotsFired = [];

    const randomStart = []

    const sunkenStatus = () => {
        for (let i = 0 ; i < shipList.length ; i++) {
            if (shipList[i].isSunk() === false) {
                return false
            }
        }
        return true
    };


    const randomShipPlacement = (length) => {
        let indexZero = getRandomInt(10)
        let indexOne = getRandomInt(10)
        let shipPosition = []
        let check;

        if (randomStart.length === 4) return

        if (indexZero + length > 10) {
            console.log("plus")

            for (let i = 0 ; i < length ; i++) {      
                shipPosition.push([indexZero - i, indexOne])
            }
            const flatRandom = randomStart.flat()

          //  if (randomStart.length === 0) {
         //       randomStart.push(shipPosition)
         //   } else {

                for (let i = 0 ; i < shipPosition.length ; i++) {
                    for (let j = 0 ; j < flatRandom.length ; j++) {
                        if (flatRandom[j][0] === shipPosition[i][0] && flatRandom[j][1] === shipPosition[i][1]) {
                            check = true
                            console.log("clash")
                            break
                        }
                    }
                }
                if (!check) {
                    randomStart.push(shipPosition)
                } else randomShipPlacement(length)
         //   }

        } else {
            console.log("minus")
            
            for (let i = 0 ; i < length ; i++) {      
                shipPosition.push([indexZero + i, indexOne])
            }
            const flatRandom = randomStart.flat()
            console.log(randomStart, shipPosition)

         //   if (randomStart.length === 0) {
         //       randomStart.push(shipPosition)
         //   } else {

                for (let i = 0 ; i < shipPosition.length ; i++) {
                    for (let j = 0 ; j < flatRandom.length ; j++) {
                        if (flatRandom[j][0] === shipPosition[i][0] && flatRandom[j][1] === shipPosition[i][1]) {
                            check = true
                            console.log("clash")
                            break
                        }
                    }
                }
                if (!check) {
                    randomStart.push(shipPosition)
                } else randomShipPlacement(length)
         //   }
        }
        return randomStart
    };

    // const randomShipPlacement = (length) => {
    //     let indexZero = getRandomInt(10)
    //     let indexOne = getRandomInt(10)
    //    // let shipPosition = []
    //     console.log("==========")
    //     console.log(indexZero, indexOne)
    //     if (indexZero + length > 10) {
    //         console.log("plus")

    //         const positions = getPositions(length, "plus", indexZero, indexOne, )
           
    //         for (let i = 0 ; i < randomStart.length ; i++) {
    //             for (let j = 0 ; j < positions.length ; j++) {
    //                 if (randomStart[i][0] === positions[j][0] && randomStart[i][1] === positions[j][1]) {
    //                     console.log("clash ", randomStart[i][0], positions[j][0], randomStart[i][1], positions[j][1])
                    
    //                 }
    //             }
    //         }
    //         //     if (ele.includes(indexZero + 1) && ele.includes(indexOne)) {
    //         //         console.log("clash", ele)
    //         //         shipPosition = []
    //         //         //randomShipPlacement(length)
    //         //     }
    //         // })
    //         console.log("positions ", positions)
    //         // const test = [...positions]
    //         // console.log("test ", test)
    //         randomStart.push(...positions)

    //     } else {
    //         console.log("minus")
            
    //         const positions = getPositions(length, "minus", indexZero, indexOne)

    //         for (let i = 0 ; i < randomStart.length ; i++) {
    //             for (let j = 0 ; j < positions.length ; j++) {
    //                 if (randomStart[i][0] === positions[j][0] && randomStart[i][1] === positions[j][1]) {
    //                     console.log("clash ", randomStart[i][0], positions[j][0], randomStart[i][1], positions[j][1])
                   
    //                 }
    //             }
    //         }

    //         console.log("positions ", positions)
    //         // const test = [...positions]
    //         // console.log("test ", test)
    //         randomStart.push(...positions)
    //     }
     
    //     return randomStart
    // };

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
        const flatShips = shipPosition.flat()
        flatShips.forEach(position => {
           
            board[position[0]][position[1]] = ship
        });
        shipList.push(ship)
        occupiedPositions.push(flatShips)
    };

    const receiveAttack = (x, y) => {
        if (board[x][y] instanceof Object) {
            board[x][y].hit()
            hitShips.push(board[x][y])
        }
        else shotsFired.push([x, y])

    };

    const getOccupiedPositions = () => occupiedPositions
    const getShipList = () => shipList;
    const getBoard = () => board;
    const getShotsFired = () => shotsFired;

    return { randomShipPlacement, getOccupiedPositions, getShipList, placeShip, getBoard, receiveAttack, getShotsFired, sunkenStatus }

};

const Player = () => {

    let board = Gameboard();

    const attackEnemy = (enemy, coodOne, coodTwo) => {
        enemy.board.receiveAttack(coodOne, coodTwo)
    };

    const viableTargets = [];

    const random = () => { return Math.floor(Math.random() * viableTargets.length) }

    const generateTargets = () => {
        for (let i = 0 ; i < 10 ; i++) {
            for (let j = 0 ; j < 10 ; j++) {
                vi   // shipPosition.forEach((pos) => {
                    //     console.log(pos)
                    //     flatRandom.forEach(ele => {
                    //         console.log(ele)
                    //         if (ele[0] !== pos[0] && ele[1] !== pos[1]) {
                    //             console.log("push")
                    //             randomStart.push(shipPosition)
                    //         } else randomShipPlacement(length)
                    //     });      
                    // })ableTargets.push([i,j])
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

