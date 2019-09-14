import {select, selectAll} from './utils'
import {
    startingPageDiv,
    difficultyBtnsArr,
    difficultyBtnsTextArr,
    startOptConsArr
} from './htmlElements'


const t = TweenMax


export const enterStartingPage = () => {
    t.set(startOptConsArr, {x: '100%'})
    t.set(startingPageDiv, {display: 'flex', opacity: 1})
    t.set(difficultyBtnsArr, {opacity: 0, y: '50%'})
    t.set(difficultyBtnsTextArr, {opacity: 0, y: '100%'})

    t.set(startingPageDiv, {display: 'flex'})
    t.staggerTo(difficultyBtnsArr, 1, {opacity: 1, y: '0%'}, 0.5)
    t.staggerTo(difficultyBtnsTextArr, 1, {opacity: 1, y: '0%'}, 0.5)
}

export const exitStartingPage = () => {
    t.staggerTo(difficultyBtnsTextArr, 1, {opacity: 0, y: '-100%', delay: 2}, 0.5)
    t.staggerTo(difficultyBtnsArr, 1, {opacity: 0, y: '-50%', delay: 2}, 0.5, () => {
        t.set(startOptConsArr, {x: '100%'})
        t.set(difficultyBtnsArr, {opacity: 0, y: '50%'})
        t.set(difficultyBtnsTextArr, {opacity: 0, y: '100%'})
        t.set(startingPageDiv, {display: 'none', opacity: 1})
    })
}
