import {c} from './utils'

const countdown = () => {
    const start = performance.now()
    const handleCountdownInterval = setInterval(() => {
        const elapsedSecs = Math.floor((performance.now() - start) / 1000),
              countdownSecs = 4 - elapsedSecs
        if(countdownSecs > 0) {
            // update counter html with these values
            console.log(countdownSecs)
        }
        if (countdownSecs === 0) {
            console.log('queue flash hidden numbers')
            return clearInterval(handleCountdownInterval)
        }
    }, 1000)
}
