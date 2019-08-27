import knuthShuffle from 'knuth-shuffle'
const shuffle = knuthShuffle.knuthShuffle


/*
generates a shuffled array containing unique random numbers
and in addition, a single duplicate of each unqiue random number.
*/
const genRandomNums = (min, max, outputArrayLength) => {

   const randomInt = (min, max) =>
         Math.floor(Math.random() * (max - min + 1)) + min;

   const randomNumberArr = [],
         len = outputArrayLength / 2

   while (randomNumberArr.length < len) {
      const r = randomInt(min, max)
      if (randomNumberArr.indexOf(r) === -1) {
         randomNumberArr.push(r)
      }
   }

   const arrayWithDuplicates = randomNumberArr.concat(randomNumberArr),
         shuffledArrayWithDuplicates = shuffle(arrayWithDuplicates)

   return shuffledArrayWithDuplicates;

}


export default genRandomNums;
