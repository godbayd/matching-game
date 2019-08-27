import {c} from './utils'
import {mainState, cellsState, resetAllGameState} from './gameState'
import {cellsArr, overlaysArr} from './htmlElements'
import {timerInterval} from './timer'
import {showWinLossAlertBox} from './win-loss-alert.js'


const resetState = () => {
    cellsState.firstClickedHiddenNumber = null
    cellsState.indexOfFirstClicked = null
}

export const handleCellClick = e => {

    const indexOfClicked = cellsArr.indexOf(e.currentTarget),
          hiddenNumberOfClicked = mainState.gameArr[indexOfClicked],
          alreadyClicked = cellsState.indexOfFirstClicked === indexOfClicked,
          inMatchedIndexesArr =
            cellsState.matchedIndexesArr.indexOf(indexOfClicked) !== -1;

    if (!alreadyClicked && !inMatchedIndexesArr) {

        // if no first choice
        if (!cellsState.firstClickedHiddenNumber) {
            cellsState.firstClickedHiddenNumber = hiddenNumberOfClicked
            cellsState.indexOfFirstClicked = indexOfClicked
            overlaysArr[indexOfClicked].style.opacity = 0
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
                    showWinLossAlertBox('win')
                }
                overlaysArr[indexOfClicked].style.opacity = 0
                resetState()
            }
            // no match case
            else {
                overlaysArr[indexOfClicked].style.opacity = 0.3
                overlaysArr[cellsState.indexOfFirstClicked].style.opacity = 0.3
                resetState()
            }
        }

    }

}
