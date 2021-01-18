const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 8000;
const cors = require('cors');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());
if (process.env.NODE_ENV === 'production') {
  // production mode
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'client/build/index.html'));
  });
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(port, () => {
      console.log(`Server is up on port ${port}!`);
    });
  });
