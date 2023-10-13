import { Player } from "./factories"

function newGame() {
    let playerOne = Player()
    let PlayerTwo = Player()
    console.log(playerOne.location.getBoard())
    console.log(playerOne, PlayerTwo)
}

export default newGame