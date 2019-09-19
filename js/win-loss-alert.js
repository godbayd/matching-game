import {alertDiv} from './htmlElements'


const alertMessage = decision => {
    return decision === 'win' ? 'You win!' :
           decision === 'lose' ? 'You lose.' : false;
}


export const appendAlertMessage = decision =>
    alertDiv.innerHTML = alertMessage(decision);
