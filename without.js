// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//           console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    
//   }
// };

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual,  expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅ .` );
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}🛑🛑🛑 `);
    
  }
};
const eqArrays = function(a, b) {
  
  // if (a.length !== b.length) {

  //   return assertArrayEqual(1,5);
  // } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        console.log(a[i])
        return assertArrayEqual(1,1);
      } else {
        
        return assertArrayEqual(1,1);
      }
    }

  }
// };
eqArrays([1,2,3], [1,2,3]);


// eqArrays([1, 2, 3], [1, 2, 3, ])
// console.log(assertArrayEqual([4,2,3],[1,2,3]))

// create a new array  with only the choosen  items 

// const source = [11,23,14,12,11,];
// const itemsToRemove = [11,23];


//  newArry which only has the cleaned items 

// function to pass new array and expected array to  array checker 


// a is the source file 
// b is the items to remove 


const without = function(a, b) {

  let newArry = [];

  // check out .includes 
  for (let i = 0; i < a.length; i++) {
    // if a doesnt match b add it to newArry 
    if (a[i] !== b[i]) {
    newArry.push(a[i]);     
    } 

    
  } 
 eqArrays(newArry,[14,112,11]) 
 return newArry
};

// assertArrayEqual(without(source,itemsToRemove),[14,12,11] )








// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

// without(source,itemsToRemove);


// assertArrayEqual(without([1,2,3], [1,2,3])); // PASS


// const without = (sourceArray, itemsToRemove) => {
//   const reducer = (accumulator, currentValue) => {
//     if (itemsToRemove.indexOf(currentValue) === -1) {
//       return accumulator.concat(currentValue);
//     } else {
//       return accumulator;
//     }
//   };
//   return sourceArray.reduce(reducer, []);
// }
//   console.log(without([1,2,3,4], [3]));