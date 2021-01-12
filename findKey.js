
//versiosn 2.0
 const findKey = function (planetsObj, callback ){
   for (const planet in planetsObj) {
       const starsObj = planetsObj[planet];
       if (callback(starsObj)){
         return planet;
       }
   }

// version 1.0    
//  let hold = ''
//  let value1 = Object.values(object)
// for (let i = 0; i < value1.length; i++) {
//   const item = value1[i];
//   if (callback(item)){
//     hold = Object.keys(object)[i]
//     return hold
//   }
// } 
} 




const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

// console.log(result);
assertEqual(result, "noma")

module.exports = findKey; 