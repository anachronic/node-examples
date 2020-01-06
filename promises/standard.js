let promise = new Promise((resolve, _reject) => {
  setTimeout(() => resolve("This is a promise"), 1000);
});

promise.then(value => console.log(value)); // this will log the value after 1sec
