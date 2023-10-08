
const Ship = (shipLength) => {

    let hits = 0;

    const length = shipLength

    const getHits = () => hits

    const hit = () => {
        hits++
        return hits
    }

    const isSunk = () => {
        if (hits < length) {
            return false
        } else return true
    }

    return { length, hit, getHits, isSunk }
}




export { Ship }

