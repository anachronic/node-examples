let promise = new Promise((resolve, _reject) => {
  setTimeout(() => resolve("This is a promise"), 1000);
});

// If a function is async, then it can await for promises!
// This avoids callback hell when working with a lot async code
let printValue = async () => {
  let value = await promise;
  console.log(value);
};

printValue();
