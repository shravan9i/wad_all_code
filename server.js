const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// In-memory data store
let users = [];

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // serve HTML from public folder

app.post('/register', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ success: true, message: 'User registered successfully' });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
