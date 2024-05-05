const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  if (pathname === '/add') {
    const result = parseFloat(query.a) + parseFloat(query.b);
    res.end(result.toString());
  } else if (pathname === '/subtract') {
    const result = parseFloat(query.a) - parseFloat(query.b);
    res.end(result.toString());
  } else if (pathname === '/multiply') {
    const result = parseFloat(query.a) * parseFloat(query.b);
    res.end(result.toString());
  } else if (pathname === '/divide') {
    const result = parseFloat(query.a) / parseFloat(query.b);
    res.end(result.toString());
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});