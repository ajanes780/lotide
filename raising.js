const raisinAlarm = function(cookie) {
  // Put your solution here
for ( let i = 0; i < cookie.length; i++){
  if (cookie[i] === "🍇" ){
    return   "Raisin alert!";
  }

}
return "All good!";
};




console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// Raisin alert!
// Raisin alert!
// All good!
