export const startCountdown = cb => {
    const start = performance.now()
    const coutdownInterval = setInterval(() => {
        const delta = performance.now() - start,
              secondsElapsed = 4 - Math.floor(delta / 1000);

        if (secondsElapsed > 0) {
            console.log(secondsElapsed)
            // update html
        }

        else {
            clearInterval(coutdownInterval)
            if (cb) cb();
        }

    }, 1000)
}
