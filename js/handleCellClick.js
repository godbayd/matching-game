import {c} from './utils'
import {cellsArr, overlaysArr} from './htmlElements'
import {choiceState, matchedIndexesCache} from './gameState'


const revealHiddenNumber = (elem) =>
    elem.style.opacity = 0;

const hideHiddenNumber = (elem) =>
    elem.style.opacity = 0.3;

const compareHiddenNumbers = (firstHiddenNumber, secondHIddenNumber) =>
    firstHiddenNumber === secondHIddenNumber ? true : false;

const updateMatchedIndexCache = (firstIndex, secondIndex) =>
    [firstIndex, secondIndex].map(
        index => matchedIndexesCache.push(index)
    );


const handleCellClick = (e, gameArr) => {

    const onFirstChoice        = !choiceState.get('firstChoiceRevealedNumber'),
          onSecondChoice       = choiceState.get('firstChoiceRevealedNumber'),
          indexOfCurrentTarget = cellsArr.indexOf(e.currentTarget),
          revealedNumber       = gameArr[indexOfCurrentTarget],
          clickedOverlayElem   = overlaysArr[indexOfCurrentTarget],
          notAlreadyChosen     =
            matchedIndexesCache.indexOf(indexOfCurrentTarget) === -1 &&
            indexOfCurrentTarget !== choiceState.get('firstChoiceIndex'),
          allMatchesFound =
            matchedIndexesCache.length / 2 === (cellsArr.length / 2) - 1;


    if (onFirstChoice && notAlreadyChosen) {
        choiceState.set('firstChoiceRevealedNumber', revealedNumber)
        choiceState.set('firstChoiceIndex', indexOfCurrentTarget)
        revealHiddenNumber(clickedOverlayElem)
    }


    if (onSecondChoice && notAlreadyChosen) {

        const numbersMatch = compareHiddenNumbers(
            choiceState.get('firstChoiceRevealedNumber'),
            revealedNumber,
        ) === true,
        numbersDontMatch = !numbersMatch;


        revealHiddenNumber(clickedOverlayElem)


        if (numbersMatch) {
            if (allMatchesFound) {
                console.log('all matches found')
            }
            updateMatchedIndexCache(
                choiceState.get('firstChoiceIndex'),
                indexOfCurrentTarget
            )
            choiceState.clearState()
            c(matchedIndexesCache)
        }


        if (numbersDontMatch) {
            const firstClickedOverlayElem =
                overlaysArr[choiceState.get('firstChoiceIndex')];
            [firstClickedOverlayElem, clickedOverlayElem].map(
                elem => hideHiddenNumber(elem)
            )
            choiceState.clearState()
        }

    }

}


export default handleCellClick;
