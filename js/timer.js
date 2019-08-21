/*
    for timer state:
        if seconds is below 1
        - set seconds to 60
        - subtract one from minute

    for time display in html
        if seconds is 60
        - output 00
*/

const durations = {
    easy: 2,
    medium: 1,
    hard: 0.5
}

const formatTime = (minutesDuration, secondsElapsed) => {

}

let timerInterval;
const timer = (startTimer, minutesDuration) => {
    if (!startTimer) clearInterval(timer);
    else {
        const start = performance.now()
        timerInterval = setInterval(() => {
            const delta = performance.now() - start,
                  secondsElapsed = (minutesDuration * 60) - Math.floor(delta / 1000);
                  // console.log(secondsElapsed)

            if (secondsElapsed > 0) {
                // timer html here
                formatTime(minutesDuration, secondsElapsed)
            }

            // loss condition
            else {
                console.log('out of time')
                clearInterval(timerInterval)
            }

        }, 1000)
    }
}

export const startEasyTimer = () => timer(true, 2, durations.easy)
export const startMediumTimer = () => timer(true, durations.medium)
export const startHardTimer = () => timer(true, 0.5, durations.hard)

export const stopTimer = () => timer(false)

startEasyTimer()
