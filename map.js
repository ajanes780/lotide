const assertEqual = require(`./assertEqual`)
const eqArrays = require(`./eqArrays`)



const words = ["ground", "control", "to", "major", "tom"];




const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
   
  }
  
  
  // console.log("this is results:", results)
  return results;
}


 const results1 = map(words, word => word[0]);
// console.log(results1);



module.exports = map;