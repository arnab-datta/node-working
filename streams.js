const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  //   fs.readFile("test-file.txt", "utf-8", (err, data) => {
  //     if (err) console.log("Error");
  //     res.end(data);
  //   });
  // Solution 2
  //   const readable = fs.createReadStream("test-file.txt"); // readble stream
  //   readable.on("data", (chunk) => {
  //     res.write(chunk); // writable stream
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  const readable = fs.createReadStream("test-file.txt"); // readble stream
  readable.on("error", (err) => {
    console.log(err);
    res.statusCode = 500;
    res.end("File not found!");
  });
  // Solution 3
  readable.pipe(res);
});

server.listen(8080, "127.0.0.1", () => {
  console.log("listening...");
});
