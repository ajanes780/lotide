
const eqArrays = require(`../lotide/eqArrays`)

//Find the mmiddle numbers
// there is no middle for even lenegth arrays
// check lenghth  then divid by 2

// @maria Chavez


const middle = function (array) {
  let middleIndex = [];
  //identify array’s length and
  //if array has one or two elements, return empty array
  if (array.length <= 2) {
    middleIndex = [];
    //if array has odd number of elements return single middle %2 === 0 > false > length / 2
  } else if (array.length % 2 !== 0) {
    middleIndex = [array[Math.round(array.length / 2) - 1]];
    //if array has even number of elements return 2 elements from middle %2 === 0 > true > length / 2 + 1
  } else if (array.length % 2 === 0) {
    // const middleOne = array[Math.round((array.length / 2) - 1)]
    // const middleTwo = array[Math.round(array.length / 2)]
    middleIndex = [
      array[Math.round(array.length / 2 - 1)],
      array[Math.round(array.length / 2)],
    ];
  }
  return middleIndex;
};

// console.log(middle([2,3,4,5,6]));



module.exports = middle; 