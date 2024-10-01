// Create Web Server
// 1. Create a Web Server
// 2. Create an API
// 3. Handle POST requests
// 4. Handle GET requests
// 5. Serve static files
// 6. Handle 404

// 1. Create a Web Server
const express = require('express');
const app = express();

// 2. Create an API
const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'Boaty', comment: 'I am on a boat' },
  { username: 'Simon', comment: 'Anybody here?' }
];

// 3. Handle POST requests
app.use(express.json());
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.status(201).send('Comment added');
});

// 4. Handle GET requests
app.get('/comments', (req, res) => {
  res.json(comments);
});

// 5. Serve static files
app.use(express.static('public'));

// 6. Handle 404
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

// Listen on port 4001
app.listen(4001, () => {
  console.log('Server is up and listening on 4001');
});

// Run the server
// node comments.js

// Test the API
// curl -X POST -H "Content-Type: application/json" -d '{"username":"Simon","comment":"Hello"}' http://localhost:4001/comments
// curl http://localhost:4001/comments
// curl http://localhost:4001/404.html

// Visit the server
// http://localhost:4001
// http://localhost:4001/comments
// http://localhost:4001/404.html