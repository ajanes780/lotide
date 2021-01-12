const eqArrays = require(`./eqArrays`)
const assertArraysEqual = require(`../lotide/assertArraysEqual`)



const letterPositions = function(data){
  let lettersByIndex={};

  for (let i = 0; i < data.length ; i++){
    let letter = data[i]
    if ( lettersByIndex[letter]){
    lettersByIndex[letter].push(i);
    } else 
    lettersByIndex[letter]= [i];


  }
  
  return lettersByIndex 
}


assertArraysEqual(letterPositions("hello").e, [1]);


module.exports = letterPositions; 