
// creat a new variable with only the items not in the remove varaible 



const without = function (a,b) {
  let newArry = [];
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      newArry += a[i]+" " 

} 
  
}

console.log( ` This is my new array ${newArry}`); 

}
const source = [11,23,14];
const itemsToRemove = [11,23]




without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

without(source,itemsToRemove)