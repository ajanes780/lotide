const assertEqual = require('../assertEqual');
const tail = require('../tail');
const  eqArrays = require(`../eqArrays`) ;
  



assertEqual(eqArrays(tail([1,3,5]),[3,5]), true);


// assertEqual(tail(["Pow", "Boom", "Labs"]),["Boom","Labs"]);
// assertEqual(tail(["wicked ", "Awesome ", "Labs "]),["Awesome ", "Labs "])