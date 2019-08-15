# To Do

## Current Tasks
- [x] initial render of timer html is 1:0 should be 1:00. Fix format

## Today's Pre-defined Tasks
- [x] start timer after flash (times currently starts at the same time as the flash)
- [x] Program timer to be compatible with floating point times, less than 1 minute. Hard difficulty will pass a 0.5 (half a minute) to the timer, so this needs to adapt to these <1min times
- [ ] add countdown feature before timer starts
- [ ] create win / loss alert html
- [ ] build win / loss alert html into game logic so that when end user wins or loses the alert html fires
- [ ] create variable for overlay opacity so that it will be easier to adjust app to full opacity for finalization when we get there. Do this or find another solution

## Near future

## keep in mind for down the road
- fully define game difficulty levels
- game loop
- load content in a way that there is no unwanted flash of unrelavent content
- on start page, tell end user that after the start button is clicked, they will have a brief countdown to the game. After the countdown will be a brief flash of all the hidden numbers. After the numbers are hidden, the timer will start. -> give option to not show this alert again and store the state of it in local storage
- may have to make timer compatible with numberOfMinutes > 1 that are floats. For example, a time like 1.5 minutes -> 1 min 30 seconds
