const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('express-jwt');
const secretKey = process.env.SECRET_KRY || 'ngEurope rocks!';

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost/database";
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('Database Connecting...');
  }
});
app.use(cors());
app.use(bodyParser.json());
app.use(
  jwt({
    secret: secretKey,
    credentialsRequiredL: true
  })
)

require('./module/route')(app);

app.listen(PORT, (req, res) => {
  console.log('Server is running');
})