import {cellsArr, overlaysArr, gameArr} from './main'

// choice state
let numberIsRevealedOnBoard = false,
    indexOfSecondRevealed = null,
    indexOfFirstRevealed = null,
    revealedNumber = null

const handleCellClick = e => {
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
         console.log('matches')
         matchedIndexes.push(indexOfFirstRevealed, indexOfCurrentTarget)
         // reset choice state
         numberIsRevealedOnBoard = false,
         indexOfFirstRevealed = null,
         indexOfSecondRevealed = null,
         revealedNumber = null
      }
      else {
         console.log('doesnt match')
         overlaysArr[indexOfFirstRevealed].style.opacity = 0.3
         overlaysArr[indexOfSecondRevealed].style.opacity = 0.3
         // reset choice state
         numberIsRevealedOnBoard = false,
         indexOfFirstRevealed = null,
         indexOfSecondRevealed = null,
         revealedNumber = null
      }
   }

   if (numberIsRevealedOnBoard === false) {
      numberIsRevealedOnBoard = true
      indexOfFirstRevealed = indexOfCurrentTarget
      revealedNumber = hiddenNumber
      overlaysArr[indexOfCurrentTarget].style.opacity = 0
   }
   else {
      // if not already revealed
      if (indexOfCurrentTarget !== indexOfFirstRevealed) {
         indexOfSecondRevealed = indexOfCurrentTarget
         overlaysArr[indexOfCurrentTarget].style.opacity = 0
         compareHiddenNumbers(revealedNumber, hiddenNumber)
      }
   }

}
export default handleCellClick;
