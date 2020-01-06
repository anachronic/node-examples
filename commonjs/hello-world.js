let greet = () => {
  // This function is not exported, but can be used in this file
  console.log("Grettings from hello-world.js");
};

let printHelloWorld = () => {
  greet();
  console.log("Hello World from hello-world.js");
};

module.exports = {
  printHelloWorld
};
