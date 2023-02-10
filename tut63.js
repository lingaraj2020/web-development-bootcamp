//console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello World this is Lingaraj');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pseudo selectors and more designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: rgb(212, 231, 212);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
  
          }
          a{
              text-decoration: none;
              color: black;
          }
          a:hover{
              color: white;
              background-color: rgb(224, 97, 97);
          }
          a:visited{
              background-color: yellow;
          }
          a:active{
              background-color: blue;
          }
          .btn{
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-weight: bold;
              background-color: crimson;
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          .btn:hover{
              color: white;
              background-color: rgb(151, 151, 199);
              border: 2px solid black;
          }
      </style>
  </head>
  
  <body>
      <div class="container" id="cont1">
          <h3>This is heading</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In vel, blanditiis porro alias consequuntur
              obcaecati ducimus neque modi maxime ipsa harum rem iste quos provident reiciendis expedita, assumenda nihil
              facere cum deleniti. Ad, voluptatibus.</p>
              <a href="https://yahoo.com "class="btn">read more</a>
              <button class="btn">contact us</button>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});