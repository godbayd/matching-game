# To Do

## Current Tasks
- [x] update gameState when either start button is clicked or individual radion button is clicked, which ever is more suitable
- [x] queue timer when start game button is clicked
- [x] present board when game button is clicked
- [x] update .timer-display .minutes html with the initial time from gameState

## Today's Pre-defined Tasks
- [x] create timer state in gameState and add a duration property so that the timer can be configured dynamically
- [x] Build Settings page
  - [x] Build html start page where settings can be configured before start of game
  - [x] start page will ask for difficulty level
  - [x] add difficulty level state to gameState
  - [x] start page will have begin button that will replace the temp start timer in the .timer-container element used for testing.
  - [x] when begin button is clicked, the start page will leave and the game board will enter.
  - [x] when the game board enters, it will flash all of the numbers very briefly and then hide them and start the timer.

## Near future
- [ ] start timer after flash (ti currently starts at the same time as the flash)
- [ ] Timer needs to be programmed to respond to floating point times, less than 1 minute. Hard difficulty will pass a 0.5 (half a minute) to the timer, so this needs to adapt to these <1min times
- [ ] create variable for overlay opacity so that it will be easier to adjust app to full opacity for finalization when we get there. Do this or find another solution
- [ ] add countdown feature before timer starts
- [ ] create win / loss alert html
- [ ] build win / loss alert html into game logic so that when end user wins or loses the alert html fires

## keep in mind for down the road
- fully define game difficulty levels
- game loop
- load content in a way that there is no unwanted flash of unrelavent content
- on start page, tell end user that after the start button is clicked, they will have a brief countdown to the game. After the countdown will be a brief flash of all the hidden numbers. After the numbers are hidden, the timer will start. -> give option to not show this alert again and store the state of it in local storage
