import {c} from './utils'
import {minutesDiv, secondsDiv, cellsArr} from './htmlElements'
import {matchedIndexesCache, timerState} from './gameState'


const updateTimerHtml = (seconds, minutes) => {
    const secStr = seconds.toString()
    let sec = secStr.length === 1 ? '0' + secStr : seconds;
    minutesDiv.innerHTML = minutes;
    secondsDiv.innerHTML = sec;
}


const runTimer = (numberOfMinutes) => {

    const start = Date.now();

    let timeState = {
        minutes: numberOfMinutes < 1 ? 0 : numberOfMinutes,
        seconds: numberOfMinutes >= 1 ? 60 : 60 * numberOfMinutes,
        get: function(key) {
            return this[key]
        },
        set: function(key, val) {
            this[key] = val
        },
        decrementOne: function(unitOfTime) {
            this.set(unitOfTime, this.get(unitOfTime) - 1)
        }
    }

    console.log(timeState)

    if (timeState.get('seconds') === 60) timeState.decrementOne('minutes');


    setInterval(() => {

        const delta = Date.now() - start,
              secondsElapsed = Math.floor(delta / 1000)

        timeState.decrementOne('seconds')

        const minutesState = timeState.get('minutes'),
              secondsState = timeState.get('seconds')

        if (secondsState < 1) {
            timeState.decrementOne('minutes')
            timeState.set('seconds', 60);
        }

        if (secondsElapsed <= (numberOfMinutes * 60)) {
            updateTimerHtml(secondsState, minutesState)
        }

        if (secondsElapsed === (numberOfMinutes * 60)) { // when timer ends
            if (matchedIndexesCache.length < cellsArr.length) {
                c('Out of time \:\(')
            }
        }

    }, 1000)

}


export const handleStartTimerBtnClick = e => {
    runTimer(timerState.get('numberOfMinutes'))
}
