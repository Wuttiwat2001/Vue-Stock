const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static(__dirname + "/upload"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v2", require("./api"));

app.listen(8081, () => {
  console.log("Server is running..");
});
