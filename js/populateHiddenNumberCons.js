const populateHiddenNumberCons = (numbersArr, elemsArr) => {
   /*
      populate .hidden-number-containers with
      text of random numbers
   */
   numbersArr.map((randomNumber, n) => {
      const cardText = document.createTextNode(randomNumber)
      elemsArr[n].appendChild(cardText)
   })
}
export default populateHiddenNumberCons;
