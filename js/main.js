/*
    nothing should be exported from main.js
    this will cause circular dependencies.
    instead, if certain things need to be shared
    amongst many modules, make a file for it and
    import (from) it where needed
*/

// pug includes
import '../index.pug'
import '../pug-includes/starting-page.pug'
import '../pug-includes/countdown-box.pug'

// scss modules
import '../styles/main.scss'

// js modules
import {select, selectAll, c} from './utils'
import genRandomNums from './genRandomNums'
import populateHiddenNumberCons from './populateHiddenNumberCons'
import handleCellClick from './handleCellClick'
import {
    hiddenNumberArr,
    cellsArr,
    overlaysArr,
    startGameBtn,
    startingPageDiv,
    minutesDiv
} from './htmlElements'
import {timerState} from './gameState'
import {handleStartTimerBtnClick} from './timer'
import {flashHiddenNumbers} from './flash-hidden-numbers'
import './timer' // may not need
import './starter-page'
import {countdown} from './countdown'


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
