/*
    ISSUE:
        when game is restarted too many times, timer is broken
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
