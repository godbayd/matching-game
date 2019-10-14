/*
    what i want:
        before timer starts -> just transition back to startingPage
        before timer starts -> prompt confirm end current game and then transition back to startPage
        only initial renders in main.js

    to do:
        - transition from gameBoard to startPage
        - rename winloss box's common names with confirm exit
        - ** For exitYes/NoBtn, event handlers need to be removed accordingly
        - clean up code
        - remove listeners
            - startBtnsArr
            - playAgainBtn
            - backBtn
    - clear out all unused imports in main.js

    play again btn remove listener needs to be added dynamically.
    right now it wont work passed first session
    - im guessing all listeners initialized in main will have this issue
    - after quit and play again, some cells are inactive for some reason
    - when cells are clicked before veiled again after unveil, they flip back
     at a different time than the rest
    POSSIBLE SOLUTION:
        - add listeners in win/loss conditions
        - event handlers need to be put in their own file to avoid circular dep.
*/
import {TweenMax} from "gsap/TweenMax";
import '../index.pug'
import '../styles/main.scss'
import {
    difficultyBtnsArr,
    playAgainBtn,
    startBtnsArr,
    backBtn
} from './htmlElements'
import {handleDifficultyRadioButtonsClicks} from './starting-page'
import {enterStartingPage} from './ui/starting-page-transition'
import {
    main,
    handlePlayAgainBtnClick,
    handleBackBtnClick
} from './eventHandlers.js'
import './starting-page-events'
import './ui/win-loss-box'
import './test'


// initial render
document.body.style.height = window.innerHeight + 'px'
enterStartingPage()


// initial difficulty buttons event listener
difficultyBtnsArr.map(
    diffBtn => diffBtn.addEventListener(
        'click', handleDifficultyRadioButtonsClicks
    )
)

startBtnsArr.map(startBtn => startBtn.addEventListener('click', main))

playAgainBtn.addEventListener('click', handlePlayAgainBtnClick)

backBtn.addEventListener('click', handleBackBtnClick)
