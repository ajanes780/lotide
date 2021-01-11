const assertEqual = require('../assertEqual');
const head = require('../head')


assertEqual(head([1,2,3]),11);
assertEqual(head([3,2,1]),3); 
assertEqual(head([3,2,1,5,6]),3);