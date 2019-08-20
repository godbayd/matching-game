import {c} from './utils'
import {mainState, cellsState} from './gameState'
import {cellsArr, overlaysArr} from './htmlElements'
import {showElem, hideElem} from './updateHtml'


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
            hideElem(overlaysArr[indexOfClicked])
        }

        else {
            // match case
            if (hiddenNumberOfClicked === cellsState.firstClickedHiddenNumber) {
                cellsState.matchedIndexesArr.push(cellsState.indexOfFirstClicked)
                cellsState.matchedIndexesArr.push(indexOfClicked)
                // win case
                if (mainState.gameArr.length === cellsState.matchedIndexesArr.length) {
                    console.log('win')
                }
                hideElem(overlaysArr[indexOfClicked])
                resetState()
            }
            // no match case
            else {
                showElem(overlaysArr[indexOfClicked])
                showElem(overlaysArr[cellsState.indexOfFirstClicked])
                resetState()
            }
        }

    }

}
