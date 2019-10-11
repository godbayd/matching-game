/*
    what i want:
        before timer starts -> just transition back to startingPage
        before timer starts -> prompt confirm end current game and then transition back to startPage
        only initial renders in main.js
*/

/*
    to do:
        - transition from gameBoard to startPage
        - rename winloss box's common names with confirm exit
        - ** For exitYes/NoBtn, event handlers need to be removed accordingly
        - clean up code
        - remove listeners
            - startBtnsArr
            - playAgainBtn
            - backBtn
*/
/*
    play again btn remove listener needs to be added dynamically.
    right now it wont work passed first session
    - im guessing all listeners initialized in main will have this issue
    - if cell clicked before timer starts, cell is inactive during gameplay
    POSSIBLE SOLUTION:
        - add listeners in win/loss conditions
        - event handlers need to be put in their own file to avoid circular dep.
*/
import {TweenMax} from "gsap/TweenMax";
import '../index.pug'
import '../styles/main.scss'
import {genRandomNums} from './genRandomNums'
import {mainState} from './gameState'
import {
    populateCellsWithHiddenNumbers,
    flashHiddenNumbers,
    intialTimeHtml
} from './updateHtml'
import {
    difficultyBtnsArr,
    playAgainBtn,
    startBtnsArr,
    innerCellsArr,
    backBtn,
    gameBoardPageDiv,
    // confirm exit
    confirmExitBoxDiv,
    ceBoxDiv,
    ceUnderlayDiv,
    promtTextDiv,
    exitYesBtn,
    exitNoBtn,
} from './htmlElements'
import {handleDifficultyRadioButtonsClicks} from './starting-page'
import {startTransition} from './ui/start-sequence'
import {exitWinLossBoxAnim} from './ui/win-loss-box'
import {enterStartingPage} from './ui/starting-page-transition'
import {clearTimer} from './timer'
import {timerState} from './gameState'
import {
    enterConfirmExitBoxAnim,
    exitConfirmExitBoxAnim,
    backToGameAnim
} from './ui/confirm-exit'
import {
    main,
    handlePlayAgainBtnClick,
    handleExitYesBtnClick,
    handleExitNoBtnClick,
    handleBackBtnClick
} from './eventHandlers.js'
import './starting-page-events'
import './ui/win-loss-box'
import './test'


document.body.style.height = window.innerHeight + 'px'


// initial render
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
