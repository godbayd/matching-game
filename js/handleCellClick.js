import {mainState, cellsState, resetAllGameState} from './gameState'
import {cellsArr, innerCellsArr} from './htmlElements'
import {timerInterval} from './timer'
import {appendAlertMessage} from './win-loss-alert'
import {enterWinLossBoxAnim} from './ui/win-loss-box'

const exposeHiddenNumber = e =>
    TweenMax.to(e, 0.3, {rotationX: 180});

const hideUnmatched = (firstClicked, secondClicked) => {
    TweenMax.to(secondClicked, 0.3, {rotationX: 180})
    if (secondClicked) {
        [firstClicked, secondClicked].map(e => {
            TweenMax.to(e, 0.3, {rotationX: 0}).delay(0.6)
        })
    }
}

const resetClickedState = () => {
    cellsState.firstClickedHiddenNumber = null
    cellsState.indexOfFirstClicked = null
}

export const handleCellClick = e => {

    const indexOfClicked = cellsArr.indexOf(e.currentTarget),
          hiddenNumberOfClicked = mainState.gameArr[indexOfClicked],
          alreadyClicked = cellsState.indexOfFirstClicked === indexOfClicked,
          inMatchedIndexesArr =
            cellsState.matchedIndexesArr.indexOf(indexOfClicked) !== -1,
          clickedInnerCell = innerCellsArr[indexOfClicked]

    if (!alreadyClicked && !inMatchedIndexesArr) {

        // if no first choice
        if (!cellsState.firstClickedHiddenNumber) {
            cellsState.firstClickedHiddenNumber = hiddenNumberOfClicked
            cellsState.indexOfFirstClicked = indexOfClicked
            exposeHiddenNumber(clickedInnerCell)
        }

        else {
            // match case
            if (hiddenNumberOfClicked === cellsState.firstClickedHiddenNumber) {
                cellsState.matchedIndexesArr.push(cellsState.indexOfFirstClicked)
                cellsState.matchedIndexesArr.push(indexOfClicked)

                // win case
                if (mainState.gameArr.length === cellsState.matchedIndexesArr.length) {
                    clearInterval(timerInterval)
                    resetAllGameState()
                    appendAlertMessage('win')
                    enterWinLossBoxAnim()
                }

                exposeHiddenNumber(clickedInnerCell)
                resetClickedState()
            }
            // no match case
            else {
                hideUnmatched(
                    innerCellsArr[cellsState.indexOfFirstClicked],
                    clickedInnerCell
                )
                resetClickedState()
            }
        }

    }

}
