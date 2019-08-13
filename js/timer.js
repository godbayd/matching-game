import {c} from './utils'
import {startTimerBtn, minutesDiv, secondsDiv} from './htmlElements'


const start = Date.now();
let timeState = {
    minutes: 2,
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


/*
    for timer state:
        if seconds is below 1
        - set seconds to 60
        - subtract one from minute

    for time display in html
        if seconds is 60
        - output 00
*/

/*
    how clocks count
    on minute - 1:00
    then      - 0:59 until 0:00
*/

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

    if (secondsElapsed <= 120) {
        updateTimerHtml(secondsState, minutesState)
    }
    /*
        when timer ends
        if (secondsElapsed === 120) {

        }
    */

}, 1000)


export const handleStartTimerBtnClick = e => {
    console.log(e)
}
