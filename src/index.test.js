
import { Ship } from './factories.js';


it('has length of 3', () => {
    const ship = Ship(3)
    expect(ship.length).toBe(3)
})

it('can hit', () => {
    const ship = Ship(3)
    expect(ship.hit()).toBe(1)
})

it('has not been sunk', () => {
    const ship = Ship(3)
    expect(ship.isSunk()).toBe(false)
})

it('has been sunk', () => {
    const ship = Ship(3)
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(true)
})