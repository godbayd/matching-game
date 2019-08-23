import '../index.pug'
import '../pug_includes/starting-page.pug'
import '../pug_includes/timer-bar.pug'
import '../pug_includes/countdown-box.pug'
import '../styles/main.scss'
import {select, selectAll, c} from './utils'
import genRandomNums from './genRandomNums'
import {handleCellClick} from './handleCellClick'
import {mainState} from './gameState'
import {
    populateCellsWithHiddenNumbers,
    flashHiddenNumbers
} from './updateHtml'
import {
    cellsArr,
    overlaysArr,
    hiddenNumberArr,
    easyRadioBtn,
    mediumRadioBtn,
    hardRadioBtn,
    startGameBtn,
    //test
    startingPageDiv
} from './htmlElements'
import {
    startEasyTimer,
    startMediumTimer,
    startHardTimer,
    stopTimer
} from './timer'
import {
    handleDifficultyRadioButtonsClicks,
    queueTimer
} from './starting-page'
import {startCountdown} from './countdown-box'
import './test'


// game data
mainState.gameArr = genRandomNums(1, 10, 12)


// populate cells with hidden numbers
populateCellsWithHiddenNumbers()


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
    startingPageDiv.style.display = 'none'
    startCountdown(() => flashHiddenNumbers(queueTimer))
}

startGameBtn.addEventListener('click', startGameEventSequence)
