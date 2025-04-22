const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.raw());
app.use(cors());

require('./src/router/router')(app);

app.listen(PORT, (req, res) => {
  console.log(`Server is running ${PORT}`);
})