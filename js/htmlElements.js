import {select, selectAll} from './utils'

// html element arrays
export const hiddenNumberArr   = selectAll('#game .board .cell .hidden-number-container')
export const cellsArr    = selectAll('#game .board .cell')
export const overlaysArr = selectAll('#game .board .cell .overlay')


// Timer elements
export const startTimerBtn = select('#game .timer-container .start-timer')
export const minutesDiv = select('#game .timer-container .time-display .minutes')
export const secondsDiv = select('#game .timer-container .time-display .seconds')
