import {hiddenNumberArr} from './htmlElements'
import {mainState} from './gameState'
import {populateHiddenNumberCons} from './populateHiddenNumberCons'


// populate cells with hidden numbers
export const populateCellsWithHiddenNumbers = () =>
    populateHiddenNumberCons(mainState.gameArr, hiddenNumberArr);
