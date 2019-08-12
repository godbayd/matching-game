import '../index.pug'
import '../styles/main.scss'
import {select, selectAll, c} from './utils'
import genRandomNums from './genRandomNums'
import populateHiddenNumberCons from './populateHiddenNumberCons'
import handleCellClick from './handleCellClick'


// html element arrays
const hiddenNumberArr   = selectAll('#game .cell .hidden-number-container')
export const cellsArr    = selectAll('#game .cell')
export const overlaysArr = selectAll('#game .cell .overlay')


// game settings
const settings = {
   difficulty: 'easy'
}


export let gameArr = genRandomNums(1, 10, 12)


// initial render
populateHiddenNumberCons(gameArr, hiddenNumberArr)


// game state
const matchedIndexes = []


// handle events
cellsArr.map(cell => {
   cell.addEventListener('click', handleCellClick)
})
