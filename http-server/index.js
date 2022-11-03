const http = require("http");
const PORT = 3000;
const server = http.createServer()

server.on("request", (req, res) => {
  if (req.url === "/friend") {
  // res.writeHead(200, { "Content-Type": "application/json" });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ id: 1, name: "Isaac Newton" }));

  } else if (req.url === '/message'){
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
