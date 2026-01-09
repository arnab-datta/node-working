// console.log(arguments);

// wrapper function in nodejs
// console.log(require("module").wrapper);

// module.exports
const C = require("./calculator-modules");
const calc1 = new C();
console.log(`module.exports - ${calc1.add(2, 8)}`);

// exports
const calc2 = require("./module2");
console.log(`exports - ${calc2.add(2, 8)}`);

// exports - using ES6 destructuring
const { add, multiply, divide } = require("./module2");
console.log(`exports - using ES6 destructuring - ${calc2.add(2, 8)}`);

// caching
require("./modules3")();
require("./modules3")();
require("./modules3")();
