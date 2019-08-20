import {hiddenNumberArr} from './htmlElements'
import {mainState} from './gameState'
import {populateHiddenNumberCons} from './populateHiddenNumberCons'


// populate cells with hidden numbers
export const populateCellsWithHiddenNumbers = () =>
    populateHiddenNumberCons(mainState.gameArr, hiddenNumberArr);


// show / hide elems
export const showElem = elem =>
    elem.style.display = 'flex';

export const hideElem = elem =>
    elem.style.display = 'none';
