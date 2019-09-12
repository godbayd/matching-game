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
    difficultyBtnsArr,
    startingPageDiv,
    playAgainBtn,
    winLossAlertBoxDiv,
    startBtnsArr
} from './htmlElements'
import {
    handleDifficultyRadioButtonsClicks,
    queueTimer
} from './starting-page'
import './ui/starting-page-ui'
import './test'

document.body.style.height = window.innerHeight + 'px'

// cells event listener
// may need to do when cells exist
// cellsArr.map(cell => cell.addEventListener('click', handleCellClick))


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
    queueTimer()
}


startBtnsArr.map(startBtn => startBtn.addEventListener('click', main))


// playAgainBtn.addEventListener('click', () => {
//     overlaysArr.map(overlay => {
//         overlay.style.opacity = 0.3
//     })
//     hideElem(winLossAlertBoxDiv)
//     showElem(startingPageDiv)
// })
