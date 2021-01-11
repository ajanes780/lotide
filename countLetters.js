const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    if (actual !== expected) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

const countingLetters = function(data){
let stringLength = {
L:0,
H:0

};

for (let i = 0; i < data.length ; i++){


  if (data[i] === "L"){
    stringLength.L += 1;
    
  
  }
    if (data[i]=== "H"){
    stringLength.H += 1;
}
}
console.log(stringLength)
return 
}
console.log(countingLetters("LHL"));

