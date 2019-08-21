import {select, selectAll} from './utils'

// html element arrays
export const hiddenNumberArr   = selectAll('#game .board .cell .hidden-number-container')
export const cellsArr    = selectAll('#game .board .cell')
export const overlaysArr = selectAll('#game .board .cell .overlay')

// starting page
export const startingPageDiv = select('#starting-page')
export const easyRadioBtn = select('#easy-radio-btn')
export const mediumRadioBtn = select('#medium-radio-btn')
export const hardRadioBtn = select('#hard-radio-btn')
export const startGameBtn = select('#start-game-btn')
