import {c} from './utils'
import {minutesDiv, secondsDiv} from './htmlElements'


const runTimer = (duration) => {
    const start = Date.now();

    let timeState = {
        minutes: duration,
        seconds: 60,
        get: function(key){
            return this[key]
        },
        set: function(key, val) {
            this[key] = val
        },
        decrementOne: function(unitOfTime) {
            this.set(unitOfTime, this.get(unitOfTime) - 1)
        }
    }


    const updateTimerHtml = (seconds, minutes) => {
        const secStr = seconds.toString()
        let sec = secStr.length === 1 ? '0' + secStr : seconds;
        minutesDiv.innerHTML = minutes;
        secondsDiv.innerHTML = sec;
    }


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

        if (secondsElapsed <= (duration * 60)) {
            updateTimerHtml(secondsState, minutesState)
        }
        /*
            when timer ends
            if (secondsElapsed === 120) {

            }
        */

    }, 1000)
}


export const handleStartTimerBtnClick = e => {
    runTimer(3)
}
