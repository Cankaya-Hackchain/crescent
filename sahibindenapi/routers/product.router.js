const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");
const axios = require("axios");


router.post("/product",async (req, res) => {

  try {
    
    // 2. API'ye POST isteği yapma
    const responseFromItemAPI = await axios.post("http://localhost:3000/items", req.body);
    console.log("responseFromItemAPI",responseFromItemAPI)
    res.status(201).send(responseFromItemAPI);
    console.log("dfewfewfew")
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
