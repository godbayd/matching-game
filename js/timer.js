import {c} from './utils'
import {startTimerBtn, minutesDiv, secondsDiv} from './htmlElements'


const start = Date.now();

setInterval(() => {
    const delta = Date.now() - start;
    // console.log(Math.floor(delta / 1000))
}, 1000)

export const handleStartTimerBtnClick = e => {
    console.log(e)
}
