const express = require('express');

const port = 4000;
const server = express();
server.use(express.json());

server.get('/', (request, response) => {
  console.log('hello world');
  response.status(200).json({
    success: true,
    message: 'hello world',
  });
});

server.listen(port, () => {
  console.log(`\n*** server listening to localhost:${port} ***\n`);
});
