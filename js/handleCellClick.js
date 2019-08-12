import {c} from './utils'
import {cellsArr, overlaysArr} from './htmlElements'

const matchedIndexes = []

// choice state
let numberIsRevealedOnBoard = false,
    indexOfSecondRevealed = null,
    indexOfFirstRevealed = null,
    revealedNumber = null

const revealNumber = (overlay) =>
    overlay.style.opacity = 0.3;

const hideNumber = (overlay) =>
    overlay.style.opacity = 0;

const resetChoiceState = () => {
    numberIsRevealedOnBoard = false
    indexOfFirstRevealed = null
    indexOfSecondRevealed = null
    revealedNumber = null
}

const updateMatchedIndexCache = (firstChoice, secondChoice) => {
    if(matchedIndexes.length === 0 || matchedIndexes.length > 0)  // necessary
        [firstChoice, secondChoice].map(
            a => matchedIndexes.push(a)
        );
}

const handleCellClick = (e, gameArr) => {
    /*
       keep track of clicked cell by index of cell and index of
       hidden number
       compare the two
       - if none are revealed, reveal without comparison
       - if one has been revealed, compare the hidden numbers
    */
   const indexOfCurrentTarget = cellsArr.indexOf(e.currentTarget),
         hiddenNumber = gameArr[indexOfCurrentTarget]


   const compareHiddenNumbers = (firstChoice, secondChoice) => {
      if (firstChoice === secondChoice) {
         c('matches')
         updateMatchedIndexCache(indexOfFirstRevealed, indexOfCurrentTarget)
         c(matchedIndexes)
         resetChoiceState()
      }
      else {
         c('doesnt match')
         revealNumber(overlaysArr[indexOfFirstRevealed])
         revealNumber(overlaysArr[indexOfSecondRevealed])
         resetChoiceState()
      }
   }


   if (numberIsRevealedOnBoard === false) {
      numberIsRevealedOnBoard = true
      indexOfFirstRevealed = indexOfCurrentTarget
      revealedNumber = hiddenNumber
      hideNumber(overlaysArr[indexOfCurrentTarget])
   }
   else {
      // if not already revealed
      if (indexOfCurrentTarget !== indexOfFirstRevealed) {
         indexOfSecondRevealed = indexOfCurrentTarget
         hideNumber(overlaysArr[indexOfCurrentTarget])
         compareHiddenNumbers(revealedNumber, hiddenNumber)
      }
   }


}
export default handleCellClick;
