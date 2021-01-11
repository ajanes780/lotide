const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  let result = eqArrays(actual, expected)
    ? `✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑 Assertion Failed: ${actual} !== ${expected}`;
  return console.log( result);
};



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
