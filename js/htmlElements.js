import {select, selectAll} from './utils'

// html element arrays
export const hiddenNumberArr  = selectAll('#game-board .cell .back')
export const cellsArr = selectAll('#game-board .cell')
export const innerCellsArr = selectAll('#game-board .inner-cell')
export const difficultyBtnsArr = selectAll('.difficulty-btn')
export const difficultyBtnsTextArr = selectAll('.difficulty-btn .text')
export const startOptConsArr = selectAll('.start-option-container')

// game-board
export const gameBoardPageDiv = select('#game-board')

// starting page
export const startingPageDiv = select('#starting-page')
export const easyOptionBtn = select('#easy-opt-btn')
export const mediumOptionBtn = select('#medium-opt-btn')
export const hardOptionBtn = select('#hard-opt-btn')
// ui
export const startOptCon = select('.start-option-container')
export const startBtnsArr = selectAll('.start-game-btn')
export const keepChoosingBtnsArr = selectAll('.keep-choosing-btn')

// timer bar
export const timerBarDiv = select('#top-bar')
export const minutesDiv = select('#top-bar .minutes')
export const secondsDiv = select('#top-bar .seconds')
export const backBtn = select('#back-btn')

// win loss
export const winLossAlertBoxDiv = select('#win-loss-box')
export const underlayDiv = select('#win-loss-box .underlay')
export const boxDiv = select('#win-loss-box .box')
export const alertDiv = select('#win-loss-box .alert')
export const playAgainBtn = select('#play-again-btn')

// confirm exit
export const confirmExitBoxDiv = select('#confirm-exit-box')
export const ceBoxDiv = select('#confirm-exit-box .box')
export const ceUnderlayDiv = select('#confirm-exit-box .underlay')
export const promtTextDiv = select('#confirm-exit-box .promt-text')
export const exitYesBtn = select('#exit-yes-btn')
export const exitNoBtn = select('#exit-no-btn')
