const express = require("express");
const app = express();
const web = require("./Routes/routes");
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(web);

app.get("/", (req, res) => {
  res.send("Book Directory");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
