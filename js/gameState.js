export const mainState = {
    gameArr: null,
    difficulty: 1,
    resetState: function(){
        this.gameArr = null
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

export const timerState = {
    start: false
}
