# To Do

## Current Tasks
- [ ] fix unmatched second choice. When match hasnt been met, both cells should be hidden again.
- a promise may be useful for all these nested callbacks. countdown -> flashHiddenNumbers -> startTimer


## Today's Pre-defined Tasks
- [ ] listen for clicks on Play again button
- [ ] create callback for play again button listener
- [ ] play again button listener restarts game
- [ ] clean up code
- [ ] plan for ui improvements

## Near future


## keep in mind for down the road
- fully define game difficulty levels
- game loop
- load content in a way that there is no unwanted flash of unrelavent content
- on start page, tell end user that after the start button is clicked, they will have a brief countdown to the game. After the countdown will be a brief flash of all the hidden numbers. After the numbers are hidden, the timer will start. -> give option to not show this alert again and store the state of it in local storage
- may have to make timer compatible with numberOfMinutes > 1 that are floats. For example, a time like 1.5 minutes -> 1 min 30 seconds
