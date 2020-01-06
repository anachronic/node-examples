const path = require("path"); // path is a Node builtin module

let basename = path.basename("/foo/bar/baz"); // this should equal baz
console.log(basename);
