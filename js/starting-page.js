import {mainState} from './gameState'
import {
    startingPageDiv,
    easyRadioBtn,
    mediumRadioBtn,
    hardRadioBtn
} from './htmlElements'
import {
    startEasyTimer,
    startMediumTimer,
    startHardTimer
} from './timer'
import {showElem, hideElem} from './updateHtml'

const exitPage = () => hideElem(startingPageDiv)

export const handleDifficultyRadioButtonsClicks = e => {
    switch (e.currentTarget.value) {
        case 'easy':
            mainState.difficulty = 1;
            break;
        case 'medium':
            mainState.difficulty = 2;
            break;
        case 'hard':
            mainState.difficulty = 3;
            break;
        default:
            return false;
    }
}

export const startGameButtonClick = e => {
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
