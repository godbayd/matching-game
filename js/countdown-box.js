import {countdownBoxContainerDiv} from './htmlElements'
import {countHtml, showElem, hideElem} from './updateHtml'

export const startCountdown = cb => {
    showElem(countdownBoxContainerDiv)
    const start = performance.now()
    const coutdownInterval = setInterval(() => {
        const delta = performance.now() - start,
              secondsElapsed = 4 - Math.floor(delta / 1000);

        if (secondsElapsed > 0) countHtml(secondsElapsed);

        else {
            clearInterval(coutdownInterval)
            hideElem(countdownBoxContainerDiv)
            if (cb) cb();
        }

    }, 1000)
}
