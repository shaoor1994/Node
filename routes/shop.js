const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("We are in another middleware");

  // sending response
  res.send("<h1> Hi, I am express </h1>");
});

module.exports = router;
