const http = require("http");
const PORT = 3000;
const server = http.createServer()

const friends = [
  {
    id: 0,
    name: 'Nikola Tesla',
  },
  {
    id: 1,
    name: 'Sir Isaac Newton',
  },
  {
    id: 2,
    name: 'Albert Einstein',
  }
];

server.on("request", (req, res) => {
  const items = req.url.split('/')
  // '/friend/2 => {'', 'friend', '2'}
  if (items[1] === "/friend") {

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }


  } else if (items[1] === '/message') {
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
