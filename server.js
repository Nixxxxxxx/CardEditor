// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Angular app build directory
app.use(express.static(path.join(__dirname, 'dist/crazy-tactics-web')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/crazy-tactics-web/index.html'));
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
