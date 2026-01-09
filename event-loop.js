const fs = require("fs");

setTimeout(() => console.log("setTimeout Timer 1"), 0);
setImmediate(() => console.log("setImmediate Timer 1"), 0);

fs.readFile("test-file.txt", "utf-8", (err, data) => {
  console.log("I/O");
  console.log("-------------------");
  setTimeout(() => console.log("setTimeout Timer 2"), 0);
  setTimeout(() => console.log("setTimeout Timer 3"), 3000);
  setImmediate(() => console.log("setImmediate Timer 2"), 0);
  process.nextTick(() => console.log("process.nextTick"));
});

console.log("Hello top-level code");
