const assertArraysEqual = require(`../lotide/assertArraysEqual`)
const eqArrays = require(`../lotide/eqArrays`)

//Find the mmiddle numbers
// there is no middle for even lenegth arrays
// check lenghth  then divid by 2



const middle = function(arrayToMiddle) {
  let index = [];
  let emptyArray = [];
  if (arrayToMiddle.length <= 2) {
    return emptyArray;
  } else if (arrayToMiddle.length % 2 !== 0) {
    index.push(Math.round(arrayToMiddle.length / 2));
    return index;
  } else if (arrayToMiddle.length % 2 === 0) {
    index.push(arrayToMiddle.length / 2,arrayToMiddle.length / 2 + 1);
    return index;
  }
};




  


assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), [],false);
assertArraysEqual(middle([1, 2]), [], false);
assertArraysEqual(middle([1, 2, 3]), [2], true);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3],true);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3],true);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4], true );