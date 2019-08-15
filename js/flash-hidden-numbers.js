import {c} from './utils'
import {cellsArr, overlaysArr, startingPageDiv, minutesDiv, secondsDiv} from './htmlElements'
import {timerState} from './gameState'

// for testing
// startingPageDiv.style.display = 'none'

const showOverlays = () =>
    overlaysArr.map(overlayDiv => overlayDiv.style.opacity = 0);

const hideOverlays = () =>
    overlaysArr.map(overlayDiv => overlayDiv.style.opacity = 0.3);



export const flashHiddenNumbers = (flashDuration, startTimerCallback) => {

    // initial
    showOverlays()

    // initial timer display render
    minutesDiv.innerHTML = timerState.get('numberOfMinutes') < 1 ?
        0 :
        timerState.get('numberOfMinutes');
    secondsDiv.innerHTML = timerState.get('numberOfMinutes') < 1 ?
        timerState.get('numberOfMinutes') * 60: '00';

    // hide overlay and start timer
    setTimeout(() => {
        hideOverlays()
        startTimerCallback() // start timer here
    }, flashDuration)

}
