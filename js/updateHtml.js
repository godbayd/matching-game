/*
    This module is code that updates the DOM
    without animations
*/
import {
    hiddenNumberArr,
    minutesDiv,
    secondsDiv,
    alertDiv
} from './htmlElements'
import {mainState} from './gameState'
import {populateHiddenNumberCons} from './populateHiddenNumberCons'
import {durations} from './timer'

// populate cells with hidden numbers
export const populateCellsWithHiddenNumbers = () =>
    populateHiddenNumberCons(mainState.gameArr, hiddenNumberArr);

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

// append alert message in win/loss case
export const appendAlertMessage = decision => {
    const alertString = decision === 'win' ? 'You win!' :
                        decision === 'lose' ? 'You lose.' : false
    alertDiv.innerHTML = alertString
}
