import {cellsArr, innerCellsArr} from '../htmlElements'

export const flashHidden = e => {

    innerCellsArr.map(innerCell => {

        TweenMax.to(innerCell, 0.3, {rotationX: 180})
        TweenMax.to(innerCell, 0.3, {rotationX: 0}).delay(2)

    })

}
