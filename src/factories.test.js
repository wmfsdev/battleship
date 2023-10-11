
import { Gameboard, Ship } from './factories.js';


describe('Ship', () => {

    let ship;

    beforeEach(() => {
        ship = Ship(3)
      });

    it('has length of 3', () => {
        expect(ship.length).toBe(3)
    })

    it('can hit', () => {
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

    let player;

    beforeEach(() => {
        player = Gameboard()
    })

    it('can place ship of length one on board', () => {   // incoming command - change, no return
        player.placeShip([[0, 0]], Ship(1))
        expect(player.getBoard()[0][0]).toBeInstanceOf(Object)
    })

    it('can place ship of length three on board', () => {
        player.placeShip([[0, 0],[1, 1]], Ship(2) )
        expect(player.getBoard()[1][1]).toBeInstanceOf(Object)
        expect(player.getBoard()[0][0]).toBeInstanceOf(Object)
    })



    it('should send ship the hit message', () => {
        // Arrange
        let ship = Ship(3)
        const hitSpy = jest.spyOn(ship, 'hit')
      
        // Act
        player.placeShip([[0, 0]], ship)
        player.receiveAttack(0, 0)
      
        // Assert
        expect(hitSpy).toBeCalled()
      })


    it('records missed shots', () => {
        player.placeShip([[1, 0]])
        player.receiveAttack(0, 0)
        expect(player.getShotsFired()).toContainEqual([0, 0])
    })

    // it('has sunk a ship', () => { // REDUNDANT - already tested isSunk() in Ship suite
                                     // *and* mock for hit() in receiveAttack() 
    //     player.placeShip(0, 0, 1)
    //     player.receiveAttack(0, 0)
    //     expect(player.getBoard()[0][0].isSunk()).toBe(true)
    // })
    
    
    it('has all sunken ships on board (1 ship)', () => {
        player.placeShip([[0, 0],[0, 1]], Ship(2))
        player.receiveAttack(0, 0)
        player.receiveAttack(0, 1)
        expect(player.sunkenStatus()).toBe(true)
    })

        
    it('has all sunken ships on board (2 ships)', () => {
        player.placeShip([[2, 2],[2, 3]], Ship(2))
        player.placeShip([[0, 0],[0, 1]], Ship(2))
        player.receiveAttack(0, 0)
        player.receiveAttack(0, 1)
        player.receiveAttack(2, 2)
        player.receiveAttack(2, 3)
        expect(player.sunkenStatus()).toBe(true)
    })

})