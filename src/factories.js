
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

    // const occupiedPositions = [] probably don't need since board already marked
    const hitShips = [];

    const viablePositions = [];
    const shipList = [];
    const shotsFired = [];

    const sunkenStatus = () => {
        for (let i = 0 ; i < shipList.length ; i++) {
            if (shipList[i].isSunk() === false) {
                return false
            }
        }
        return true
    };

    // private fn
    // const getRandomInt = () => {
    //     return Math.floor(Math.random() * 10);
    // }

    const placeShip = (shipPosition, ship) => {
        shipPosition.forEach(position => {
            board[position[0]][position[1]] = ship
        });
        shipList.push(ship)
    };

    const receiveAttack = (x, y) => {
        if (board[x][y] instanceof Object) {
            board[x][y].hit()
            hitShips.push(board[x][y])
        }
        else shotsFired.push([x, y])

    };

    const getBoard = () => board;
    const getShotsFired = () => shotsFired;

    return { placeShip, getBoard, receiveAttack, getShotsFired, sunkenStatus }

};

const Player = () => {

    let player = Gameboard();

    const attackEnemy = (enemy, coodOne, coodTwo) => {
        enemy.player.receiveAttack(coodOne, coodTwo)
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
        let randomIndex = random()
        let target = viableTargets[randomIndex]
        attackEnemy(enemy, target[0], target[1])
        removeViableTarget(randomIndex)

    };

    const getViableTargets = () => viableTargets;

    return { player, aiMove, generateTargets, getViableTargets, removeViableTarget, attackEnemy }
}



export { Ship, Gameboard, Player }

