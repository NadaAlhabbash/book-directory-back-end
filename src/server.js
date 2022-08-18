const express = require("express");
const app = express();
const web = require("./Routes/routes");

app.use(express.json());

app.use(web);

app.get("/", (req, res) => {
  res.send("Book Directory");
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
