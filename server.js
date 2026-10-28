const http = require('http');

const port = process.env.PORT || 8080;
const message = 'This is Aniket Karajgikar, Welcome!';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome</title>
        <style>
          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #e0f2fe, #f0fdf4);
            font-family: Arial, sans-serif;
          }
          h1 {
            font-size: 2.5rem;
            color: #0f172a;
            text-align: center;
            padding: 2rem;
          }
        </style>
      </head>
      <body>
        <h1>${message}</h1>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
