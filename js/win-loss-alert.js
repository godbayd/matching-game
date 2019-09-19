import {alertDiv} from './htmlElements'

export const appendAlertMessage = decision => {
    const alertString = decision === 'win' ? 'You win!' :
                        decision === 'lose' ? 'You lose.' : false
    alertDiv.innerHTML = alertString
}
