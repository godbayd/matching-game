import {
    hiddenNumberArr,
    minutesDiv,
    secondsDiv,
    countdownBoxContainerDiv,
    countdownBoxDiv,
    overlaysArr
} from './htmlElements'
import {mainState} from './gameState'
import {populateHiddenNumberCons} from './populateHiddenNumberCons'
import {durations} from './timer'


// populate cells with hidden numbers
export const populateCellsWithHiddenNumbers = () =>
    populateHiddenNumberCons(mainState.gameArr, hiddenNumberArr);


// show / hide elems
export const showElem = elem =>
    elem.style.display = 'flex';

export const hideElem = elem =>
    elem.style.display = 'none';


// timer html
export const intialTimeHtml = difficulty => {
    const minutes = durations[difficulty]
    minutesDiv.innerHTML = minutes < 1 ? 0 : minutes
    secondsDiv.innerHTML = minutes < 1 ? 60 * minutes : '00'
}

export const timerHtml = timeArr => {
    const minutes = timeArr[0]
    const seconds = timeArr[1]
    minutesDiv.innerHTML = minutes
    secondsDiv.innerHTML = seconds
}


// countdown
export const countHtml = (secondsElapsed) => {
    countdownBoxDiv.innerHTML = secondsElapsed
}

// flash hidden numbers
export const flashHiddenNumbers = cb => {
    overlaysArr.map(overlay => hideElem(overlay))
    setTimeout(() => {
        overlaysArr.map(overlay => showElem(overlay))
        cb()
    }, 1000)
}
