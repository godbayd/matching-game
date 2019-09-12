import {select, selectAll} from './utils'

// html element arrays
export const hiddenNumberArr   = selectAll('#game-board .cell .back')
export const cellsArr    = selectAll('#game-board .cell')

// starting page
export const startingPageDiv = select('#starting-page')
export const easyOptionBtn = select('#easy-opt-btn')
export const mediumOptionBtn = select('#medium-opt-btn')
export const hardOptionBtn = select('#hard-opt-btn')
// ui
export const startOptCon = select('.start-option-container')
export const startOptConsArr = selectAll('.start-option-container')
export const difficultyBtnsArr = selectAll('.difficulty-btn')
export const startBtnsArr = selectAll('.start-game-btn')

// timer bar
export const timerBarDiv = select('#timer-bar')
export const minutesDiv = select('#top-bar .minutes')
export const secondsDiv = select('#top-bar .seconds')

// coutdown
export const countdownBoxContainerDiv = select('#countdown-box-container')
export const countdownBoxDiv = select('#countdown-box-container .box')

// win loss
export const winLossAlertBoxDiv = select('#win-loss-alert-box')
export const winLossAlertDiv = select('#win-loss-alert-box .alert')
export const playAgainBtn = select('#play-again-btn')
