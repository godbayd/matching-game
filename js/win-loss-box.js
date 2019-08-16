import {winLossBoxDiv, winLossAlertDiv} from './htmlElements'

const showWinLossBoxDiv = () =>
    winLossBoxDiv.style.display = 'flex';

export const alertWinLoss = (winOrLoss) => {
    if (winOrLoss === 'win') {
        winLossAlertDiv.innerHTML = `You win :) You've found all the matches in time.`;
        showWinLossBoxDiv()
    }
    if (winOrLoss === 'loss') {
        winLossAlertDiv.innerHTML = `Out of time :( Unfortunately, you lose this round.`;
        showWinLossBoxDiv()
    }
}
