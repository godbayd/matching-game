/*
    nothing should be exported from main.js
    this will cause circular dependencies.
    instead, if certain things need to be shared
    amongst many modules, make a file for it and
    import (from) it where needed
*/

import '../index.pug'
import '../styles/main.scss'
import {select, selectAll, c} from './utils'
import genRandomNums from './genRandomNums'
import populateHiddenNumberCons from './populateHiddenNumberCons'
import handleCellClick from './handleCellClick'
import {hiddenNumberArr, cellsArr, overlaysArr, startTimerBtn} from './htmlElements'
import {handleStartTimerBtnClick} from './timer'
import './timer'

// import './test'


// game data
export let gameArr = genRandomNums(1, 10, 12)


// initial render
populateHiddenNumberCons(gameArr, hiddenNumberArr)


// handle events
cellsArr.map(cell => {
   cell.addEventListener('click', e => handleCellClick(e, gameArr))
})

startTimerBtn.addEventListener('click', handleStartTimerBtnClick)
