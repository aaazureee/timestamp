// server.js
// where your node app starts

// init project
import express from 'express';
import moment from 'moment';
const app = express();


app.get('/', (req, res) => 
  res.sendFile(__dirname + '/views/index.html')
)

app.get('/:time', (req, res) => {
  const time = req.params.time;
  const unixRegex = /^[0-9]/; // starts with number
  let date;
  unixRegex.test(time) ? date = moment(time, "X") : date = moment(time, "MMMM DD, YYYY");
  let unix = date.unix();
  let natural = date.format("MMMM DD, YYYY");
  !date.isValid() && (natural = null);
  res.json({
    unix,
    natural
  })
});

// listen for requests :)
app.listen(process.env.PORT)
console.log(process.env.PORT)