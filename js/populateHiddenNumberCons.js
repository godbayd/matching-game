/*
    populate .hidden-number-containers with
    text of random numbers
*/
export const populateHiddenNumberCons = (numbersArr, elemsArr) => {
    numbersArr.map((randomNumber, n) => {
        elemsArr[n].innerHTML = null
        const cardText = document.createTextNode(randomNumber)
        elemsArr[n].appendChild(cardText)
   })
}
