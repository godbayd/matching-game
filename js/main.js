/*
    PLAY AGAIN FUNCTIONALITY NEEDS WORK
*/
import {TweenMax} from "gsap/TweenMax";
import '../index.pug'
import '../styles/main.scss'
import {select, selectAll, c} from './utils'
import genRandomNums from './genRandomNums'
import {mainState} from './gameState'
import {
    populateCellsWithHiddenNumbers,
    flashHiddenNumbers,
    showElem,
    hideElem,
    intialTimeHtml,
} from './updateHtml'
import {
    cellsArr,
    overlaysArr,
    difficultyBtnsArr,
    startingPageDiv,
    playAgainBtn,
    winLossAlertBoxDiv,
    startBtnsArr,
    innerCellsArr
} from './htmlElements'
import {
    handleDifficultyRadioButtonsClicks,
    queueTimer
} from './starting-page'
import './ui/starting-page-ui'
import {startTransition} from './ui/start-sequence'
import {exitWinLossBoxAnim} from './ui/win-loss-box'
import './ui/win-loss-box'
import {enterStartingPage} from './ui/starting-page-transition'
import './test'

document.body.style.height = window.innerHeight + 'px'

// initial render
enterStartingPage()

// difficulty buttons event listener
difficultyBtnsArr.map(
    diffBtn => diffBtn.addEventListener(
        'click', handleDifficultyRadioButtonsClicks
    )
)


const main = e => {

    e.stopPropagation()

    // game data
    mainState.gameArr = genRandomNums(1, 10, 12)

    // populate cells with hidden numbers
    populateCellsWithHiddenNumbers()

    // initial time html before timer starts moving
    const md = mainState.difficulty
    const diff = md === 1 ? 'easy' :
                 md === 2 ? 'medium' :
                 md === 3 ? 'hard' : false
    intialTimeHtml(diff)

    startTransition()

}


startBtnsArr.map(startBtn => startBtn.addEventListener('click', main))


playAgainBtn.addEventListener('click', e => {
    e.stopPropagation()

    console.log('clicked')
    TweenMax.set(innerCellsArr, {rotationX: 0})
    exitWinLossBoxAnim(enterStartingPage)
})
