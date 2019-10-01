import {resetAllGameState} from './gameState'
import {timerHtml} from './updateHtml'
import {appendAlertMessage} from './updateHtml'
import {enterWinLossBoxAnim} from './ui/win-loss-box'
import {handleCellClick} from './handleCellClick'
import {cellsArr} from './htmlElements'
import {timerState} from './gameState'


export const durations = {
    easy: 2,
    medium: 1,
    hard: 0.5
}

let min = null
let sec = null

const formatTime = (minutesDuration, secondsElapsed) => {
    if (min === null) min = minutesDuration < 1 ? 0 : minutesDuration - 1;
    if (sec === null) sec = minutesDuration < 1 ? (60 * minutesDuration) : 60;
    if (sec === 0) {
        sec = 60
        min--
    }
    sec--
    const secOut = sec === 60 ? '00' : sec < 10 ? `0${sec}` : sec;
    return [min, secOut].map(a => a.toString());
}

export const clearTimer = () => timer(false)

let timerInterval;

const timer = (startTimer, minutesDuration) => {
    min = null
    sec = null
    if (!startTimer) clearInterval(timerInterval);
    else {
        if (timerState.okToStart) {
            const start = performance.now()
            timerInterval = setInterval(() => {
                const delta = performance.now() - start,
                secondsElapsed = (minutesDuration * 60) - Math.floor(delta / 1000);

                if (secondsElapsed >= 0) {
                    // timer html here
                    timerHtml(formatTime(minutesDuration, secondsElapsed))

                    // loss case
                    if (secondsElapsed === 0) {
                        timerState.started = false
                        clearTimer()
                        resetAllGameState()
                        appendAlertMessage('lose')
                        enterWinLossBoxAnim()
                        cellsArr.map(cell => {
                            cell.removeEventListener('click', handleCellClick)
                        })
                    }

                }

            }, 1000)

            timerState.started = true
        }
    }
}

export const startEasyTimer = () => timer(true, 2, durations.easy)
export const startMediumTimer = () => timer(true, durations.medium)
export const startHardTimer = () => timer(true, 0.5, durations.hard)
