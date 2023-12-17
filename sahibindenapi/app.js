const express = require("express");
const mongoose = require("mongoose");
const ProductRouter = require("./routers/product.router");
const app = express();

const dbURI =
  "mongodb+srv://mongocuBiraderler:y3M7FAVqf8yCAlFa@solarenergyapp.ph7woum.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3003))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(ProductRouter);

const port = process.env.PORT || 3002;
app.listen(port);