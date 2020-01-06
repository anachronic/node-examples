// Why should we use let instead of var

// For reference read the following
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example

console.log("running with var");
var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}

console.log("running with let");
let fns = [];
// let's create 3 functions
for (let i = 0; i < 3; i++) {
  // and store them in fns
  fns[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  fns[j]();
}

