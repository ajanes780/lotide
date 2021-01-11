

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
  const inspect = require('util').inspect; // <= add this line
 
  //clear easy case first  direct length compare }
if ( Object.keys(inputObject1).length !== Object.keys(inputObject2).length){
  console.log(` this objects lenght ${inspect(inputObject1)} doesn't match this input obejct length  ${inspect(inputObject2)}`)
  return false  
} else  {
  if (Object.values(inputObject1) !== Object.values(inputObject2) ){
    console.log(` this object keys ${inspect(inputObject1)} doesn't match this input obeject's keys  ${inspect(inputObject2)}`)
    return false 
  }else {
    console.log(` this object keys and length  ${inspect(inputObject1)} do match this input obeject's keys length  ${inspec(inputObject2)}  `  )
    return true 
  }

  }  
};

  



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
