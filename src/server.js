import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './App';

const port = '8000'
const app = express();

const renderHtmlPage = (title, content) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>${title}</title>
    </head>
    <body>
      ${content}
    </body>
  </html>
  `
}

app.get('/', (req, res) => {
  const title = "Webpack+React";
  const content = renderToString(<App />);
  const page = renderHtmlPage("Webpack+React", content);

  res.status(200).send(page);
});

// handling 404 pages
app.get('*', function(req, res) {
  res.status(404).send('Server.js > 404 - Page Not Found');
});

// global error catcher, need four arguments
app.use((err, req, res, next) => {
  console.error("Error on request %s %s", req.method, req.url);
  console.error(err.stack);
  res.status(500).send("Server error");
});

process.on('uncaughtException', evt => {
  console.log('uncaughtException: ', evt);
});

app.listen(port, function(){
  console.log(`Listening on port ${port}`);
});

