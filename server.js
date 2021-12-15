// const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

app.use(express.static(__dirname + '/public'));
app.get("/backend", (req, res) => {
    res.send({ message: "Hello from server!" });
    // console.log("hello from server");
  });
  
// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));

// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'test.html'));
// });