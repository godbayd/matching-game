import {showElem, hideElem} from './updateHtml'
import {alertDiv} from './htmlElements'


const alertMessage = decision => {
    switch (decision) {
        case 'win':
            return 'You win!';
        case 'lose':
            return 'You lose.';
        default: console.error('winLossAlert: wrong argument... must be "win" or "lose"');
    }
}


export const appendAlertMessage = decision => {
    alertDiv.innerHTML = alertMessage(decision)
}
