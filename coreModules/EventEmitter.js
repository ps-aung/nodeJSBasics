const { EventEmitter } = require("events");

const myEmitter = new EventEmitter();

//listener
myEmitter.on("greeting", (name) => {
  console.log(`Hello ${name}!`);
});

myEmitter.on("greeting", () => {
  console.log("Hello again!");
});

//emitter
// myEmitter.emit("greeting", "PyaeSone");

const http = require("http");

const server = http.createServer();

server.on("listening", () => {
  setImmediate(() => {
    console.log("Server is listening now");
  });
});

server.on("listening", () => {
  console.log("Server is listening now again");
});

server.listen("3000");
