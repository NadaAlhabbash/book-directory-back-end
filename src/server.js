const express = require("express");
const app = express();
const web = require("./Routes/routes");
const {errorHandler} = require('./Routes/errorHandler')
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/books', web);

app.get("/", (req, res) => {
  res.send("Book Directory");
});

app.use(errorHandler);

app.use((req, res, next) => {
  res.status(404).send("ERROR 404!");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
