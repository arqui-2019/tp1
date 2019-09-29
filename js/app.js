const express = require("express");
const app = express();
const PORT = 5000;

//Server
app.get('/ping', (req, res) => {
  res.status(200).send('node - pong');
});

app.get('/timeout', (req, res) => {
  setTimeout(function() {
    res.status(200).send("node - timeout");
  }, 5*1000);
});

app.get('/intensive', (req, res) => {
  var startTime = Date.now();
  while ((Date.now() - startTime) < 5000) {};
  res.status(200).send("node - intensive");
});



app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});