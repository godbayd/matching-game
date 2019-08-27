export const mainState = {
    gameArr: null,
    difficulty: null,
    resetState: function(){
        this.gameArr = null
        this.difficulty = null
    }
}

export const cellsState = {
    matchedIndexesArr: [],
    firstClickedHiddenNumber: null,
    indexOfFirstClicked: null,
    resetState: function() {
        this.matchedIndexesArr = []
        this.firstClickedHiddenNumber = null
        this.indexOfFirstClicked = null
    }
}

export const resetAllGameState = () => {
    mainState.resetState()
    cellsState.resetState()
}
