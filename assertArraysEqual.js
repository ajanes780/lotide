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

