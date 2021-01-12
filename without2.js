const assertArraysEqual = require(`./assertArraysEqual`)



const without = (sourceArray, itemsToRemove) => {
  const reducer = (accumulator, currentValue) => {
    if (itemsToRemove.indexOf(currentValue) === -1) {
      return accumulator.concat(currentValue);
    } else {
      return accumulator;
    }
  };
  return sourceArray.reduce(reducer, []);
}
  // console.log(without([1,2,3,4], [3]));



 
  
  // const words = ["hello", "world", "lighthouse"];
  // without(words, ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  // assertArraysEqual(words, ["hello", "world", "lighthouse"]);

  module.exports = without; 