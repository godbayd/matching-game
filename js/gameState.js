export const mainState = {
    gameArr: null
}

export const cellsState = {
    matchedIndexesArr: [],
    firstClickedHiddenNumber: null,
    indexOfFirstClicked: null,
    resetState: function() {
        matchedIndexesArr = []
        firstClickedHiddenNumber = null
        indexOfFirstClicked = null
    }
}
