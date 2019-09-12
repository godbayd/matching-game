import '../index.pug'
import '../styles/main.scss'
import {select, selectAll, c} from './utils'
import genRandomNums from './genRandomNums'
import {handleCellClick} from './handleCellClick'
import {mainState} from './gameState'
import {
    populateCellsWithHiddenNumbers,
    flashHiddenNumbers,
    showElem,
    hideElem,
    intialTimeHtml
} from './updateHtml'
import {
    cellsArr,
    overlaysArr,
    easyRadioBtn,
    mediumRadioBtn,
    hardRadioBtn,
    startGameBtn,
    startingPageDiv,
    playAgainBtn,
    winLossAlertBoxDiv,
    startBtnsArr
} from './htmlElements'
import {
    handleDifficultyRadioButtonsClicks,
    queueTimer
} from './starting-page'
import {startCountdown} from './countdown-box'
import './test'

document.body.style.height = window.innerHeight + 'px'

// initial render
easyRadioBtn.checked = true


// cells event listener
cellsArr.map(cell => cell.addEventListener('click', handleCellClick))


// radio buttons event listener
const radioBtns = [easyRadioBtn, mediumRadioBtn, hardRadioBtn]
radioBtns.map(
    radioBtn => radioBtn.addEventListener(
        'click', handleDifficultyRadioButtonsClicks
    )
)


// start game button listener
const startGameEventSequence = () => {
    hideElem(startingPageDiv)
    startCountdown(() => flashHiddenNumbers(queueTimer))
}


const main = e => {
    // game data
    mainState.gameArr = genRandomNums(1, 10, 12)
    // populate cells with hidden numbers
    populateCellsWithHiddenNumbers()
    // initial time html before timer starts moving
    intialTimeHtml(
        mainState.difficulty === 1 ? 'easy' :
        mainState.difficulty === 2 ? 'medium' :
        mainState.difficulty === 3 ? 'hard' : false
    )
    startGameEventSequence();
}


startBtnsArr.map(startBtn => startBtn.addEventListener('click', main))


playAgainBtn.addEventListener('click', () => {
    overlaysArr.map(overlay => {
        overlay.style.opacity = 0.3
    })
    hideElem(winLossAlertBoxDiv)
    showElem(startingPageDiv)
})
