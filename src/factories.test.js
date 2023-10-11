
import { Gameboard, Ship, Player } from './factories.js';


describe('Ship', () => {

    let ship;

    beforeEach(() => {
        ship = Ship(3)
      });

    it('has length of 3', () => {
        expect(ship.length).toBe(3)
    })

    it('can hit, and increases hits by 1', () => {
        expect(ship.hit()).toBe(1)
    })

    it('has not been sunk', () => {
        expect(ship.isSunk()).toBe(false)
    })

    it('has been sunk', () => {
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBe(true)
    });
});

// --- GAMEBOARD ---

describe('Gameboard', () => {

    let board;

    beforeEach(() => {
        board = Gameboard()
    })

    it('can place ship of length one on board', () => {   // incoming command - change, no return
        board.placeShip([[0, 0]], Ship(1))
        expect(board.getBoard()[0][0]).toBeInstanceOf(Object)
    })

    it('can place ship of length three on board', () => {
        board.placeShip([[0, 0],[1, 1]], Ship(2) )
        expect(board.getBoard()[1][1]).toBeInstanceOf(Object)
        expect(board.getBoard()[0][0]).toBeInstanceOf(Object)
    })

    it('can send hit message to the ship', () => {
        // Arrange
        let ship = Ship(3)
        const hitSpy = jest.spyOn(ship, 'hit')
      
        // Act
        board.placeShip([[0, 0]], ship)
        board.receiveAttack(0, 0)
      
        // Assert
        expect(hitSpy).toBeCalled()
      })


    it('records missed shots', () => {
        board.placeShip([[1, 0]])
        board.receiveAttack(0, 0)
        expect(board.getShotsFired()).toContainEqual([0, 0])
    })

    // it('has sunk a ship', () => { // REDUNDANT - already tested isSunk() in Ship suite
                                     // *and* mock for hit() in receiveAttack() 
    //     board.placeShip(0, 0, 1)
    //     board.receiveAttack(0, 0)
    //     expect(board.getBoard()[0][0].isSunk()).toBe(true)
    // })
    
    
    it('has all sunken ships on board (1 ship)', () => {
        board.placeShip([[0, 0],[0, 1]], Ship(2))
        board.receiveAttack(0, 0)
        board.receiveAttack(0, 1)
        expect(board.sunkenStatus()).toBe(true)
    })

        
    it('has all sunken ships on board (2 ships)', () => {
        // Arrange
        board.placeShip([[0, 0],[0, 1]], Ship(2))
        board.placeShip([[2, 2],[2, 3]], Ship(2))
        // Act
        board.receiveAttack(0, 0)
        board.receiveAttack(0, 1)
        board.receiveAttack(2, 2)
        board.receiveAttack(2, 3)
        // Assert
        expect(board.sunkenStatus()).toBe(true)
    })

})

// --- PLAYERS ---

describe('Player', () => {

    let playerOne;
    let playerTwo;

    beforeEach(() => {
        playerOne = Player()
        playerTwo = Player()
    });

    it('can attack enemy gameboard', () => {
        const enemyPlayer = playerTwo.player
        const receiveAttackSpy = jest.spyOn(enemyPlayer, 'receiveAttack')
        playerOne.attackEnemy(playerTwo, 0,0)
        expect(receiveAttackSpy).toBeCalled()
    })

});