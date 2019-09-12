import {mainState} from './gameState'
import {
    startingPageDiv
} from './htmlElements'
import {
    startEasyTimer,
    startMediumTimer,
    startHardTimer
} from './timer'
import {hideElem, intialTimeHtml} from './updateHtml'

const exitPage = () => hideElem(startingPageDiv)


/*
    radioBtn callback:
        set mainState.difficulty based on
        respective radioBtn click
*/
export const handleDifficultyRadioButtonsClicks = e => {
    switch (e.currentTarget.id) {
        case 'easy-opt-btn':
            mainState.difficulty = 1;
            break;
        case 'medium-opt-btn':
            mainState.difficulty = 2;
            break;
        case 'hard-opt-btn':
            mainState.difficulty = 3;
            break;
        default:
            return false;
    }
    // const md = mainState.difficulty
    // const diff = md === 1 ? 'easy' :
    //              md === 2 ? 'medium' :
    //              md === 3 ? 'hard' : false
    // intialTimeHtml(diff)
}


/*
    start timer based on set difficulty
*/
export const queueTimer = e => {
    if (mainState.difficulty) {
        switch (mainState.difficulty) {
            case 1:
                startEasyTimer();
                exitPage()
                break;
            case 2:
                startMediumTimer();
                exitPage()
                break;
            case 3:
                startHardTimer();
                exitPage()
                break;
            default:
                console.log('incorrect difficulty')
        }
    }
}
