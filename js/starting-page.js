import {mainState} from './gameState'
import {startingPageDiv} from './htmlElements'
import {
    startEasyTimer,
    startMediumTimer,
    startHardTimer
} from './timer'
import {hideElem, intialTimeHtml} from './updateHtml'

/*
    radioBtn callback:
        set mainState.difficulty based on
        respective radioBtn click
*/
export const handleDifficultyRadioButtonsClicks = e => {
    const id = e.currentTarget.id
    id === 'easy-opt-btn'   ? mainState.difficulty = 1 :
    id === 'medium-opt-btn' ? mainState.difficulty = 2 :
    id === 'hard-opt-btn'   ? mainState.difficulty = 3 : false
}


/*
    start timer based on set difficulty
*/
export const queueTimer = e => {
    const md = mainState.difficulty
    if (md) {
        md === 1 ? startEasyTimer() :
        md === 2 ? startMediumTimer() :
        md === 3 ? startHardTimer() : false
    }
}
