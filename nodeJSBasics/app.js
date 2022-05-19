const http = require("http");

const port = 5050;

const dbConnection = true;

if (!dbConnection) {
  process.exit(1);
}

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end(`
                <html>
                    <head>
                        <title>First Node App</title>
                    </head>
                    <body>
                        <h1>Welcome to my node app</h1>
                    </body>
                </html>
            `);
      break;
    case "/admin":
      res.end("welcome to admin page");
      break;
    case "/user":
      res.end("Welcome to user page");
      break;
    default:
      res.end("not found");
  }
});

server.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
