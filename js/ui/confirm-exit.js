import {
    confirmExitBoxDiv,
    ceBoxDiv,
    ceUnderlayDiv,
    promptTextDiv,
    exitYesBtn,
    exitNoBtn,
    gameBoardPageDiv
} from '../htmlElements'

const t = TweenMax

export const enterConfirmExitBoxAnim = () => {
    t.set(confirmExitBoxDiv, {display: 'flex'})
    t.to(ceUnderlayDiv, 0.3, {opacity: 0.5})
    t.to(ceBoxDiv, 0.3, {opacity: 1, y: '0%'}).delay(0.3)
    t.to(promptTextDiv, 0.3, {opacity: 1}).delay(0.6)
    t.to(exitYesBtn, 0.3, {opacity: 1}).delay(0.9)
    t.to(exitNoBtn, 0.3, {opacity: 1}).delay(0.9)
}

export const exitConfirmExitBoxAnim = (enterStartingPage) => {
    t.to(exitYesBtn, 0.3, {opacity: 0, y: '-100%'})
    t.to(exitNoBtn, 0.3, {opacity: 0, y: '-100%'})
    t.to(promptTextDiv, 0.3, {opacity: 0, y: '-100%'})
    t.to(ceBoxDiv, 0.3, {opacity: 0, y: '-50%'}).delay(0.3)
    t.to(gameBoardPageDiv, 0.3, {opacity: 0, y: '-50%'}).delay(0.3)
    t.to(ceUnderlayDiv, 0.3, {opacity: 0, onComplete: () => {
        // revert css for next round
        t.set(confirmExitBoxDiv, {display: 'none'})
        t.set(exitYesBtn, {y: '0%'})
        t.set(exitNoBtn, {y: '0%'})
        t.set(promptTextDiv, {y: '0%'})
        t.set(ceBoxDiv, {y: '0%'})
        t.set(gameBoardPageDiv, {y: '0%'})
        // enter starting page
        enterStartingPage()
    }}).delay(0.6)
}

export const backToGameAnim = () => {
    t.to(exitYesBtn, 0.3, {opacity: 0, y: '-100%'})
    t.to(exitNoBtn, 0.3, {opacity: 0, y: '-100%'})
    t.to(promptTextDiv, 0.3, {opacity: 0, y: '-100%'})
    t.to(ceBoxDiv, 0.3, {opacity: 0, y: '-50%'}).delay(0.3)
    t.to(ceUnderlayDiv, 0.3, {opacity: 0, onComplete: () => {
        t.set(confirmExitBoxDiv, {display: 'none'})
        t.set(exitYesBtn, {y: '0%'})
        t.set(exitNoBtn, {y: '0%'})
        t.set(promptTextDiv, {y: '0%'})
        t.set(ceBoxDiv, {y: '0%'})
    }}).delay(0.3)
}
