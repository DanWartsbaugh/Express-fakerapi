const express = require("express");
const app = express();
require('dotenv').config();
require('./configs/mongoose.config');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const Router = require("./routes/jokes.routes");
Router(app);

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);