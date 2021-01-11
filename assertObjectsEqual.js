const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this 
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    if (actual !== expected) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
  



};



// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    if (actual !== expected) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};
let keyValues1 = [];
let keyValues2 =[];
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (inputObject1, inputObject2) {
  //clear easy case first  direct length compare }
if ( Object.keys(inputObject1).length !== Object.keys(inputObject2).length){
  return false  
} else  {
  if (Object.values(inputObject1) !== Object.values(inputObject2) ){
    return false 
  }else {
    return true 
  }

  }  
};

  



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual( eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
