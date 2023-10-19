
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
        ship.hit()
        expect(ship.getHits()).toBe(1)
    })

    it('can hit, and increases hits by 2', () => {
        ship.hit()
        ship.hit()
        expect(ship.getHits()).toBe(2)
    })    
    
    it('has not been sunk (no hits)', () => {
        expect(ship.isSunk()).toBe(false)
    })

    it('(length 3), takes two hits and does not sink', () => {
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBe(false)
    })

    it('(length 3), takes 3 hits and sinks', () => {
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBe(true)
    });

    it('(length 4) different length, three hits remains afloat', () => {
        ship = Ship(4)
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBe(false)
    })

    it('(length 4) different length, four hits and sinks', () => {
        ship = Ship(4)
        ship.hit()
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBe(true)
    })

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

    it('(length 1) can *randomly* place one ship', () => {
        board.placeShip(board.randomShipPlacement(1), Ship(1))
        const sample = board.getBoard()
        
        let object;
        for (const prop of sample) {
            for (const subProp of prop)
                if (subProp.hasOwnProperty('hit') ) {
                    object = subProp
            }
        }
        expect(object).toHaveProperty('length', 1)
        expect(object).toHaveProperty('hit')
        expect(board.getOccupiedPositions()).toHaveLength(1)
    })

    it('(length 3) can *randomly* place one ship', () => {
        board.placeShip(board.randomShipPlacement(3), Ship(3))
        const sample = board.getBoard()
        let object;
        for (const prop of sample) {
            for (const subProp of prop)
            if (subProp.hasOwnProperty('hit') ) {
                object = subProp
            }
        }
        expect(object).toHaveProperty('length', 3)
        expect(object).toHaveProperty('hit')
        expect(board.getOccupiedPositions()[0]).toHaveLength(3)
    })

    it('(length 1) can *randomly* place 99 ships', () => {
        for (let i = 0 ; i < 99 ; i++) {
            board.placeShip(board.randomShipPlacement(1), Ship(1))
        }
        expect(board.getRandomStart()).toHaveLength(99)
    })

    it('(length 3) can *randomly* place 10 ships, no conflict', () => {
        const shipNumber = 10
        const shipLength = 3
        // change number and length for alternative test scenarios
        for (let i = 0 ; i < shipNumber ; i++) {
            board.placeShip(board.randomShipPlacement(shipLength), Ship(shipLength))
        }
        const sample = board.getRandomStart()
        const flatSample = sample.flat()
        let duplicateCount = 0
        flatSample.forEach(ele => {
            for (let i = 0 ; i < flatSample.length ; i++) {
                if (ele[0] === flatSample[i][0] && ele[1] === flatSample[i][1]) {
                    duplicateCount++
        // there will always be one duplication when comparing each element against
        // all other elements in the the array - this factors in the duplication.
        // if duplicateCount is off by even one there is a problem.
                  }
            }
        });
        expect(duplicateCount).toBe((shipNumber * shipLength)) 
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
        const enemyPlayer = playerTwo.board
        const receiveAttackSpy = jest.spyOn(enemyPlayer, 'receiveAttack')
        playerOne.attackEnemy(playerTwo, 0, 0)
        expect(receiveAttackSpy).toBeCalled()
    })

    it('can generate list of viable targets', () => { // possibly redundant
        playerOne.generateTargets()
        expect(playerOne.getViableTargets()).toHaveLength(100)
    })

    it('(ai) can successfully attack opponent', () => { // mock

        const enemyPlayer = playerTwo.board
        const aiAttackSpy = jest.spyOn(enemyPlayer, 'receiveAttack')

        playerOne.generateTargets()
        playerOne.aiMove(playerTwo)

        expect(aiAttackSpy).toBeCalled()
    })

    it('can remove correct target from target list', () => {
        playerOne.generateTargets()
        playerOne.removeViableTarget([0,0])
        expect(playerOne.getViableTargets()).not.toContain([0,0])
    })

});

