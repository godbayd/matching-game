/*
    nothing should be exported from main.js
    this will cause circular dependencies.
    instead, if certain things need to be shared
    amongst many modules, make a file for it and
    import (from) it where needed
*/


// import './test'

// scss modules
import '../styles/main.scss'

// pug includes
import '../index.pug'
import '../pug-includes/starting-page.pug'
import '../pug-includes/countdown-box.pug'
import '../pug-includes/win-loss-box.pug'

// js modules
import {select, selectAll, c} from './utils'
import genRandomNums from './genRandomNums'
import populateHiddenNumberCons from './populateHiddenNumberCons'
import handleCellClick from './handleCellClick'
import {handleStartTimerBtnClick} from './timer'
import {handlePlayAainBtnClick} from './play-again'
import {
    hiddenNumberArr,
    cellsArr,
    overlaysArr,
    startGameBtn,
    startingPageDiv,
    minutesDiv,
    playAgainBtn
} from './htmlElements'
import {timerState} from './gameState'
import {flashHiddenNumbers} from './flash-hidden-numbers'
import {countdown} from './countdown'
import './timer' // may not need
import './starter-page'


// game data
export let gameArr = genRandomNums(1, 10, 12)


// initial render
populateHiddenNumberCons(gameArr, hiddenNumberArr)


// handle events
cellsArr.map(cell => {
   cell.addEventListener('click', e => handleCellClick(e, gameArr))
})

startGameBtn.addEventListener('click', () => {
    startingPageDiv.style.display = 'none'

    /*
        handleStartTimerBtnClick is a callback to flashHiddenNumbers
        so that the timer can be called to start in
        setTimout in flashHiddenNumbers
    */
    countdown(() => flashHiddenNumbers(1300, handleStartTimerBtnClick))

})
playAgainBtn.addEventListener('click', handlePlayAainBtnClick)
