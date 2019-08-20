import {c} from './utils'
import {mainState, cellsState} from './gameState'
import {cellsArr, overlaysArr} from './htmlElements'

/*
    export const cellsState = {
        matchedIndexesArr: [],
        firstClickedHiddenNumber: null,
        indexOfFirstClicked: null
    }
*/

export const handleCellClick = e => {
    
    const indexOfClicked = cellsArr.indexOf(e.currentTarget),
          hiddenNumberOfClicked = mainState.gameArr[indexOfClicked],
          alreadyClicked = cellsState.indexOfFirstClicked === indexOfClicked,
          inMatchedIndexesArr =
            cellsState.matchedIndexesArr.indexOf(indexOfClicked) !== -1;

    if (!alreadyClicked && !inMatchedIndexesArr) {

        if (!cellsState.firstClickedHiddenNumber) {
            cellsState.firstClickedHiddenNumber = hiddenNumberOfClicked
            cellsState.indexOfFirstClicked = indexOfClicked
            console.log(hiddenNumberOfClicked)
        }

        else {
            // match case
            if (hiddenNumberOfClicked === cellsState.firstClickedHiddenNumber) {
                cellsState.matchedIndexesArr.push(cellsState.indexOfFirstClicked)
                cellsState.matchedIndexesArr.push(indexOfClicked)
                cellsState.firstClickedHiddenNumber = null
                cellsState.indexOfFirstClicked = null
                console.log('match')
                console.log(cellsState.matchedIndexesArr)
            }
            // no match case
            else {
                cellsState.firstClickedHiddenNumber = null
                cellsState.indexOfFirstClicked = null
                console.log('no match')
                console.log(cellsState.matchedIndexesArr)
            }
        }

    }

}
