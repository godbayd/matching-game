import {genRandomNums} from './genRandomNums'
import {mainState} from './gameState'
import {
    populateCellsWithHiddenNumbers,
    intialTimeHtml
} from './updateHtml'
import {
    difficultyBtnsArr,
    playAgainBtn,
    innerCellsArr,
    gameBoardPageDiv,
    // confirm exit
    confirmExitBoxDiv,
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

export const main = e => {

    e.stopPropagation()

    timerState.okToStart = true

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

export const handlePlayAgainBtnClick = e => {

    e.stopPropagation()

    TweenMax.set(innerCellsArr, {rotationX: 0})

    // difficulty buttons click listeners
    difficultyBtnsArr.map(
        diffBtn => diffBtn.addEventListener(
            'click', handleDifficultyRadioButtonsClicks
        )
    )

    exitWinLossBoxAnim(enterStartingPage)
    playAgainBtn.removeEventListener('click', handlePlayAgainBtnClick)
}

export const handleExitYesBtnClick = e => {
    clearTimer()

    TweenMax.set(innerCellsArr, {rotationX: 0})

    // difficulty buttons click listeners
    difficultyBtnsArr.map(
        diffBtn => diffBtn.addEventListener(
            'click', handleDifficultyRadioButtonsClicks
        )
    )

    exitConfirmExitBoxAnim(enterStartingPage)
    exitYesBtn.removeEventListener('click', handleExitYesBtnClick)
}

export const handleExitNoBtnClick = e => {
    backToGameAnim()
    exitNoBtn.removeEventListener('click', handleExitNoBtnClick)
}

export const handleBackBtnClick = e => {

    e.stopPropagation()

    if (!timerState.started) {

        timerState.okToStart = false

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

    } else {
        // animate in confirmExitBoxDiv
        // add listeners
        // define event handler functions
        // timerState.started may need to be reset in multiple places

        enterConfirmExitBoxAnim()

        exitYesBtn.addEventListener('click', handleExitYesBtnClick)

        exitNoBtn.addEventListener('click', handleExitNoBtnClick )

    }

}
