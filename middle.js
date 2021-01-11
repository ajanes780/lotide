const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    return console.log(`🛑 These arrays are not the same length`);
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return console.log(`❌ ${array1} !== ${array2}`);
    }
  }
  return console.log(`✅ Assertion passed ${array1} === ${array2}`);
};

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     if (actual !== expected) {
//       console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     }
//   }
// };



const eqArrays = function(a, b) {
  
  if (a.length !== b.length) {
    
    return assertEqual(1,5);
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        
        return assertEqual(1,5);
      } else {
        
        return assertEqual(1,1);
      }
    }

  }
};


//Find the mmiddle numbers
// there is no middle for even lenegth arrays
// check lenghth  then divid by 2



const middle = function(data) {
  let middleNumbers = [];
  if (data.length <=  2)
    return [];

  const midindex =  Math.floor(data.length / 2);

  if (data.length % 2 !== 0) {
    middleNumbers.push(data[midindex]);
  } else {
    middleNumbers.push(data[midindex - 1 ]);
    middleNumbers.push(data[midindex]);
    return middleNumbers;
  }
};


console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);