// choice state
/*
    openingChoice -> first revealed hidden number on every choice
    closingChoice -> the second revealed hidden number on every choice
    openingChoiceIndex -> index of cell of opening choice in cellsArr
    closingChoiceIndex -> index of cell of closing choice in cellsArr
*/

export const matchedIndexesCache = []

export const choiceState = {
    firstChoiceRevealedNumber: null,
    secondChoiceRevealedNumber: null,
    firstChoiceIndex: null,
    secondChoiceIndex: null,
    get: function(key){
        return this[key]
    },
    set: function(key, val) {
        this[key] = val
    },
    clearState: function(){
        this.firstChoiceRevealedNumber = null,
        this.secondChoiceRevealedNumber = null,
        this.firstChoiceIndex = null,
        this.secondChoiceIndex = null;
    }
}
