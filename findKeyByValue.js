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
const findKeyByValue = function (inputObj , valueToCheck ){
for (const key in inputObj) {
    const value = inputObj[key];
console.log(key , value)
}

}



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// create a function to get the data from a object 
// is the data pass in the object ?
findKeyByValue(bestTVShowsByGenre, "The Wire")



// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);