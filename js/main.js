/*
    ISSUE:
        if backBtn is clicked before timer starts... when a new game
        is initiated, the timer is inaccurate.
*/
/*
    what i want:
        before timer starts -> just transition back to startingPage
        before timer starts -> prompt confirm end current game and then transition back to startPage
*/
/*
    possible solution:
        keep state and only if state is right, start timer. This way, the timer
        can be kept from firing altogether. The problem seems to be that timer 
        is still being called after timeout is cleared
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
    gameBoardPageDiv
} from './htmlElements'
import {handleDifficultyRadioButtonsClicks} from './starting-page'
import {startTransition} from './ui/start-sequence'
import {exitWinLossBoxAnim} from './ui/win-loss-box'
import {enterStartingPage} from './ui/starting-page-transition'
import {clearTimer} from './timer'
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


const main = e => {

    e.stopPropagation()

    // remove difficulty buttons event listener
    difficultyBtnsArr.map(
        diffBtn => diffBtn.removeEventListener(
            'click', handleDifficultyRadioButtonsClicks
        )
    )

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

    TweenMax.set(innerCellsArr, {rotationX: 0})

    // difficulty buttons click listeners
    difficultyBtnsArr.map(
        diffBtn => diffBtn.addEventListener(
            'click', handleDifficultyRadioButtonsClicks
        )
    )

    exitWinLossBoxAnim(enterStartingPage)

})


backBtn.addEventListener('click', e => {

    e.stopPropagation()

    clearTimer()

    TweenMax.set(innerCellsArr, {rotationX: 0})

    // difficulty buttons click listeners
    difficultyBtnsArr.map(
        diffBtn => diffBtn.addEventListener(
            'click', handleDifficultyRadioButtonsClicks
        )
    )

    TweenMax.to(gameBoardPageDiv, 0.3, {y: '-50%', opacity: 0, onComplete: () => {
        TweenMax.set(gameBoardPageDiv, {y: '0%'})
        enterStartingPage()
    }})

})
