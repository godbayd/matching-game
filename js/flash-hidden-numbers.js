import {c} from './utils'
import {cellsArr, overlaysArr, startingPageDiv} from './htmlElements'

// for testing
// startingPageDiv.style.display = 'none'

const showOverlays = () =>
    overlaysArr.map(overlayDiv => overlayDiv.style.opacity = 0);

const hideOverlays = () =>
    overlaysArr.map(overlayDiv => overlayDiv.style.opacity = 0.3);



export const flashHiddenNumbers = (flashDuration) => {

    // initial
    showOverlays()

    // hide overlay after duration of time
    setTimeout(hideOverlays, 1300)

}
