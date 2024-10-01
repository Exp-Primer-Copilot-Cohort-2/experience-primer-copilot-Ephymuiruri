// Create web server
// 1. Import express
const express = require('express');
const app = express();
// 2. Create server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
// 3. Create route
app.get('/comments', (req, res) => {
  res.send('Comments page');
});
// 4. Create route
app.get('/comments/:id', (req, res) => {
  res.send('Comment ID: ' + req.params.id);
});