const assertArraysEqual = require(`../lotide/assertArraysEqual`)
const eqArrays = require(`../lotide/eqArrays`)

//Find the mmiddle numbers
// there is no middle for even lenegth arrays
// check lenghth  then divid by 2



const middle = function(arrayToMiddle) {
  let index = [];
  let emptyArray = [];
  if (arrayToMiddle.length <= 2) {  /// if the arry is less then two return []
    return emptyArray;
  } else if (arrayToMiddle.length % 2 !== 0) { // if its not a even length 
    index.push(Math.round(arrayToMiddle.length / 2));
    return index;
  } else if (arrayToMiddle.length % 2 === 0) { // if it is a even length 
    index.push(arrayToMiddle.length / 2,arrayToMiddle.length / 2 + 1);
    return index;
  }
};





module.exports = middle; 