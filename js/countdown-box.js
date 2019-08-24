import {countdownBoxContainerDiv, countdownBoxDiv} from './htmlElements'
import {countHtml, showElem, hideElem} from './updateHtml'

export const startCountdown = cb => {
    countdownBoxDiv.innerHTML = 'Get ready !'
    showElem(countdownBoxContainerDiv)
    const start = performance.now()
    const coutdownInterval = setInterval(() => {
        const delta = performance.now() - start,
              secondsElapsed = 4 - Math.floor(delta / 1000);

        if (secondsElapsed > 0) countHtml(secondsElapsed);

        else {
            console.log('foo')
            clearInterval(coutdownInterval)
            hideElem(countdownBoxContainerDiv)
            cb()
        }

    }, 1000)
}
