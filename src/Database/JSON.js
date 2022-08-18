const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "./Database/books.json");

const readJson = (req, res, cb) => {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res
        .status(500, { "Content-Type": "text/html" })
        .send("<h1>Sorry, we've had a problem on our end</h1>");
    } else {
      cb(req, res, data);
    }
  });
};

const writeJson = (data, res) => {
  let jsonContent = JSON.stringify(data);
  fs.writeFile(filePath, jsonContent, "utf8", (err) => {
    if (err)
      res
        .status(500, { "Content-Type": "text/html" })
        .send("<h1>Sorry, we've had a problem on our end</h1>");
    else {
      console.log("File written successfully\n");
    }
  });
};

module.exports = {
  readJson,
  writeJson,
};
