let list = [1,2,3] // We want to square numbers in this list

// This is ES5
console.log(list.map(function (number) {
  return number * number
}))

// This is ES6 with arrow functions
console.log(list.map(number => number * number))
