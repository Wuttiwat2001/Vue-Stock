const express = require("express");
const app = express();
app.use(express.static(__dirname + "/upload"))



app.use("/api/v2", require("./api"))

app.listen(3000, () => {
  console.log("Server is running..");
});
