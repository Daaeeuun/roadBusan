const express = require("express");
const server = express();

server.use(express.static("public"));

const b_res = require("./server/bar/bar_restaurant");
server.use(b_res);

server.listen(3000, () => {
  console.log("listenign at http://localhost:3000");
});
