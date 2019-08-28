import {showElem, hideElem} from './updateHtml'
import {winLossAlertBoxDiv, winLossAlertDiv} from './htmlElements'


const alertMessage = decision => {
    switch (decision) {
        case 'win':
            return 'You win!';
        case 'lose':
            return 'You lose.';
        default: console.error('winLossAlert: wrong argument... must be "win" or "lose"');
    }
}


export const showWinLossAlertBox = decision => {
    winLossAlertDiv.innerHTML = alertMessage(decision)
    showElem(winLossAlertBoxDiv)
}
