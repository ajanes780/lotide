// FUNCTION IMPLEMENTATION
const assertEqual = require(`../lotide/assertEqual`)
const eqArrays = require(`../lotide/eqArrays`)



const assertArraysEqual = function (data1 , data2 , expected){
  return assertEqual(eqArrays([data1],[data2]),expected);  

}

module.exports = assertArraysEqual; 