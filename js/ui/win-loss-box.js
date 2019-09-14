import {select, selectAll} from '../utils'
import {
    winLossAlertBoxDiv,
    underlayDiv,
    boxDiv,
    alertDiv,
    playAgainBtn,
    gameBoardPageDiv
} from '../htmlElements'

const t = TweenMax

export const enterWinLossBoxAnim = () => {
    t.set(winLossAlertBoxDiv, {display: 'flex'})
    t.to(underlayDiv, 0.3, {opacity: 0.5})
    t.to(boxDiv, 0.3, {opacity: 1, y: '0%'}).delay(0.3)
    t.to(alertDiv, 0.3, {opacity: 1}).delay(0.6)
    t.to(playAgainBtn, 0.3, {opacity: 1}).delay(0.9)
}

export const exitWinLossBoxAnim = () => {
    t.to(playAgainBtn, 0.3, {opacity: 0, y: '-100%'})
    t.to(alertDiv, 0.3, {opacity: 0, y: '-100%'})
    t.to(boxDiv, 0.3, {opacity: 0, y: '-50%'}).delay(0.3)
    t.to(gameBoardPageDiv, 0.3, {opacity: 0, y: '-50%'}).delay(0.3)
    t.to(underlayDiv, 0.3, {opacity: 0, onComplete: () => {
        // revert css for next round
        t.set(winLossAlertBoxDiv, {display: 'none'})
        t.set(playAgainBtn, {y: '0%'})
        t.set(alertDiv, {y: '0%'})
        t.set(boxDiv, {y: '0%'})
        t.set(gameBoardPageDiv, {y: '0%'})
    }}).delay(0.6)
}
