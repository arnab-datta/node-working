const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_size = 3;

setTimeout(() => console.log("setTimeout Timer 1"), 0);
setImmediate(() => console.log("setImmediate Timer 1"), 0);

fs.readFile("test-file.txt", "utf-8", (err, data) => {
  console.log("I/O");
  console.log("-------------------");
  setTimeout(() => console.log("setTimeout Timer 2"), 0);
  setTimeout(() => console.log("setTimeout Timer 3"), 3000);
  setImmediate(() => console.log("setImmediate Timer 2"), 0);
  process.nextTick(() => console.log("process.nextTick"));

  // THREAD POOL
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
    // console.log(`${Date.now() - start} password encrypted - ${derivedKey.toString("hex")}`);
    console.log(`${Date.now() - start} password encrypted 1`);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
    console.log(`${Date.now() - start} password encrypted 2`);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
    console.log(`${Date.now() - start} password encrypted 3`);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
    console.log(`${Date.now() - start} password encrypted 4`);
  });
  //   crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  //   console.log(`${Date.now() - start} password encrypted 5`);
});

console.log("Hello top-level code");
