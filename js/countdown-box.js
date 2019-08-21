const startCountdown = cb => {
    const start = performance.now()
    const countdown = setInterval(() => {
        const delta = performance.now() - start;
        const secondsElapsed = 4 - (Math.floor(delta) / 1000);
        if (secondsElapsed < 1) {
            clearInterval(countdown);
            // start timer
        }
    })
}
