const express = require("express");
const app = express();
const PORT = 5000;

function factorialize(num) {
  if (num < 0)
    return -1;
  
  else if (num == 0)
    return 1;
    
    else {
      return (num * factorialize(num - 1));
    }
}


//Server
app.get('/ping', (req, res) => {
  res.status(200).send('node pong');
});

app.get('/timeout', (req, res) => {
  setTimeout(function() {
    res.status(200).send();
  }, 5*1000);
});

app.get('/intensive', (req, res) => {
  var fact = factorialize(90)
  res.status(200).send({'factorial' : fact});
});



app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});