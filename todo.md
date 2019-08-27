# To Do

## Problems
- On second round (following playBtn click):
 - timer doesn't set the correct time
 - hidden numbers seem to be left unhidden. Overlay needs to be hidden again in preparation for continued play. This is because the display of overlays are being set to none somewhere. 


## play again
- [ ] write list for play again stuff
- [ ] consolidate game functions in main function to call when game restarts
- [ ] clear all numbers before populate in populateHiddenNumberCons
- [ ] in main.js create a click listener on playAgainBtn

## Win / loss alert box
- [x] create win-loss-alert-box.pug with a play again button
- [x] create winLossAlertBox.js


## hidden numbers flash
- [x] flashHiddenNumbers is set into place and for some reason countdown function calling it immediately and not after like its programmed to do. Fix this.


## Countdown stuff
 - [x] finish countdown function in countdown-box.js
 - [x] create unary function in main.js to house countdown function which takes timer function as a callback so that they execute consecutively.
 - there needs to be a named unary function so that the click listener can also be removed
 - [x] add unary function to start button click listener as a callback in main.js
