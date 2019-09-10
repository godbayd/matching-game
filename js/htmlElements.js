import {select, selectAll} from './utils'

// html element arrays
export const hiddenNumberArr   = selectAll('#game .board .cell .hidden-number-container')
export const cellsArr    = selectAll('#game .board .cell')
export const overlaysArr = selectAll('#game .board .cell .overlay')

// starting page
export const startingPageDiv = select('#starting-page')
export const easyRadioBtn = select('#easy-opt-btn')
export const mediumRadioBtn = select('#medium-opt-btn')
export const hardRadioBtn = select('#hard-opt-btn')
export const startGameBtn = select('#start-game-btn')

// timer bar
export const timerBarDiv = select('#timer-bar')
export const minutesDiv = select('#timer-bar .minutes')
export const secondsDiv = select('#timer-bar .seconds')

// coutdown
export const countdownBoxContainerDiv = select('#countdown-box-container')
export const countdownBoxDiv = select('#countdown-box-container .box')

// win loss
export const winLossAlertBoxDiv = select('#win-loss-alert-box')
export const winLossAlertDiv = select('#win-loss-alert-box .alert')
export const playAgainBtn = select('#play-again-btn')
