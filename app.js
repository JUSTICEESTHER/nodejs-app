const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Esther Docker App!</h1>
    <h2>Running on AWS EC2!</h2>
    <p>By Justice Sopuruchi Esther</p>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});