export const mainState = {
    gameArr: null,
    difficulty: null
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
