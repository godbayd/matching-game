import {c} from './utils'
import {cellsArr, overlaysArr, startingPageDiv} from './htmlElements'

// for testing
// startingPageDiv.style.display = 'none'

const showOverlays = () =>
    overlaysArr.map(overlayDiv => overlayDiv.style.opacity = 0);

const hideOverlays = () =>
    overlaysArr.map(overlayDiv => overlayDiv.style.opacity = 0.3);



export const flashHiddenNumbers = (flashDuration, startTimerCallback) => {

    // initial
    showOverlays()

    // hide overlay and start timer
    setTimeout(() => {
        hideOverlays()
        startTimerCallback() // start timer here
    }, flashDuration)

}
