import {c} from './utils'
import {timerState} from './gameState'
import {
    easyRadioBtn,
    mediumRadioBtn,
    hardRadioBtn,
} from './htmlElements'

const difficultyTimes = {
    easy: 2,
    medium: 1,
    hard: 0.5
}

const radioBtns = [easyRadioBtn, mediumRadioBtn, hardRadioBtn]

const handleRadioBtnClick = e => {
    timerState.set('numberOfMinutes', difficultyTimes[e.currentTarget.value])
    c(timerState.numberOfMinutes)
}

radioBtns.map(radioBtn => {
    radioBtn.addEventListener('click', handleRadioBtnClick)
})
