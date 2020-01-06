// Here's a medium article explaining this
// https://medium.com/free-code-camp/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881?#.59q9th108
let bunny = {
  name: "Usagi",
  otherNames: ["Hase", "Conejo", "Coniglietto"],
  showName: function() {
    console.log(this.name);
  },
  showOtherNamesFn: function() {
    this.otherNames.forEach(function(name) {
      console.log(`${this.name} could also be called ${name}`);
    });
  },
  showOtherNamesArrow: function() {
    this.otherNames.forEach(name => {
      console.log(`${this.name} could also be called ${name}`);
    });
  }
};

bunny.showName();
bunny.showOtherNamesFn(); // this will not do what we need it to do
bunny.showOtherNamesArrow(); // this will do what we need it to do because it doesn't rebind 'this'
