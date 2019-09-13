import {select, selectAll} from './utils'
import {winLossAlertBoxDiv} from './htmlElements'
const t = new TimelineLite()

/*
    #win-loss-box
        .rel
            .underlay
            .box
                .alert
                #play-again-btn
*/

const underlay = select('#win-loss-box .underlay')
const box = select('#win-loss-box .box')
const alert = select('#win-loss-box .alert')
const playAgainBtn = select('#play-again-btn')

t.set(winLossAlertBoxDiv, {display: 'flex'})
t.to(underlay, 0.3, {opacity: 0.5})
t.to(box, 0.3, {opacity: 1, y: '0%'})
t.to(alert, 0.3, {opacity: 1})
t.to(playAgainBtn, 0.3, {opacity: 1})
