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

t.set(winLossAlertBoxDiv, {display: 'flex'})
t.to(winLossAlertBoxDiv, 0.5, {opacity: 1})
