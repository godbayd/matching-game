import {
    startOptConsArr,
    difficultyBtnsArr,
    startBtnsArr,
    keepChoosingBtnsArr
} from '../htmlElements'


const handleStartBtnClick = e => {
    e.stopPropagation()
    e.currentTarget.removeEventListener('click', handleStartBtnClick)
}


const handleBtnClick = e => {

    e.stopPropagation()

    const indexOfCurrent = difficultyBtnsArr.indexOf(e.currentTarget),
          currentStartOptCon = startOptConsArr[indexOfCurrent],
          currentStartBtn = startBtnsArr[indexOfCurrent],
          currentKeepChoosingBtn = keepChoosingBtnsArr[indexOfCurrent]

    const notClicked = difficultyBtnsArr.map((btn, n) => {
        return btn !== e.currentTarget ? startOptConsArr[n] : false
    }).filter(b => b)

    const handleKeepChoosingBtnClick = e => {
        e.stopPropagation()
        TweenMax.to(currentStartOptCon, 0.3, {x: '100%'})
        e.currentTarget.removeEventListener('click', handleKeepChoosingBtnClick)
    }

    notClicked.map(nc => {
        TweenMax.to(nc, 0.3, {x: '100%'}).delay(0)
    })

    TweenMax.to(currentStartOptCon, 0.3, {x: '0%'})

    currentStartBtn.addEventListener('click', handleStartBtnClick)
    currentKeepChoosingBtn.addEventListener('click', handleKeepChoosingBtnClick)

}


difficultyBtnsArr.map(btn => {
    btn.addEventListener('click', handleBtnClick)
})
