const express = require("express");
http = require("http");
const hostname = "localhost";
const port = 3000;
const nationRouter = require("./routes/nationRouter");

const bodyParser = require("body-parser");
const app = express();
// const morgan = require("morgan");
// app.use(morgan("dev"));
// app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/nations", nationRouter);
// app.use((req, res, next) => {
//   console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<html><body><h1>Hello Word</h1></body></html>");
// });


const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
