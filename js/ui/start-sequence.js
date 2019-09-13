import {
    cellsArr, innerCellsArr, startingPageDiv, gameBoardPageDiv
} from '../htmlElements'
import {queueTimer} from '../starting-page'

/*
    - transition starting-page -> game-board
    - flash hidden
    - queue timer
*/

let t
export const startTransition = () => {

    t = new TimelineLite()


    // exit starting page
    t.to(startingPageDiv, 0.5, {opacity: 0})
    t.set(startingPageDiv, {display: 'none'})


    // enter game board page and cells
    t.set(gameBoardPageDiv, {display: 'flex'})
    t.to(gameBoardPageDiv, 0.5, {opacity: 1})


    // flash hidden
    t.to(innerCellsArr, 0.3, {rotationX: 180})
    t.to(innerCellsArr, 0.3, {rotationX: 0, delay: 2})

    t.add(() => queueTimer())

}
