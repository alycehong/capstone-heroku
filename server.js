const path = require('path');
const express = require('express');
var app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.get("/test", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});