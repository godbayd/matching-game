import {c} from './utils'
import {countdownBoxDiv, countdownCountDiv} from './htmlElements'


const hideCountdownBoxDiv = () =>
    countdownBoxDiv.style.display = 'none';

const showCountdownBoxDiv = () =>
    countdownBoxDiv.style.display = 'flex';


export const countdown = (flashHiddenNumbersCallback) => {

    showCountdownBoxDiv()

    const start = performance.now()
    const handleCountdownInterval = setInterval(() => {
        const elapsedSecs = Math.floor((performance.now() - start) / 1000),
              countdownSecs = 4 - elapsedSecs
        if(countdownSecs > 0) {
            // update counter html with these values
            console.log(countdownSecs)
            countdownCountDiv.innerHTML = countdownSecs;
        }
        if (countdownSecs === 0) {
            console.log('queue flash hidden numbers')
            hideCountdownBoxDiv()
            flashHiddenNumbersCallback()
            return clearInterval(handleCountdownInterval)
        }
    }, 1000)

}
