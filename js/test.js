import {TweenMax} from "gsap/TweenMax";
import {select, selectAll} from './utils'
import {mainState} from './gameState'

const startingPageDiv = select('#starting-page')
const startOptCon = select('.start-option-container')
const startOptConsArr = selectAll('.start-option-container')
const difficultyBtnsArr = selectAll('.difficulty-btn')
const startBtnsArr = [
    select('#easy-btn'), select('#medium-btn'), select('#hard-btn')
]
const keepChoosingBtnsArr = selectAll('.keep-choosing-btn')


const handleStartBtnClick = e => {
    e.stopPropagation()
    console.log(e.currentTarget)
    e.currentTarget.removeEventListener('click', handleStartBtnClick)
}


const handleBtnClick = e => {

    e.stopPropagation()

    console.log(mainState)

    const indexOfCurrent = difficultyBtnsArr.indexOf(e.currentTarget)
    const currentStartOptCon = startOptConsArr[indexOfCurrent]
    const currentStartBtn = startBtnsArr[indexOfCurrent]
    const currentKeepChoosingBtn = keepChoosingBtnsArr[indexOfCurrent]

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
