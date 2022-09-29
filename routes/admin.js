const express = require("express");

const router = express.Router(); // will route

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action = "/product" method = "POST" ><input type= "text" name="title" ><button type="submit">Add Product</button></form>'
  );
});

router.post("/product", (req, res) => {
  // it will only trigger on post now

  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
