const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const portNo = 8000;
const greetRoute = require("./routes/greetRoute");
const productRoute = require("./routes/productRoute");

app.use(bodyParser.json());
app.use("/api/v1", greetRoute);
app.use("/api/v1", productRoute);

app.listen(portNo, () => {
  console.log(`App is listening at port number ${portNo}`);
});
