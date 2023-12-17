const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/user.router");
const userEfficiencyRouter = require("./routers/userEfficiency.router");
const CompanyRouter = require("./routers/company.router");
const ItemRouter = require("./routers/item.router");
const app = express();

const dbURI =
  "mongodb+srv://mongocuBiraderler:y3M7FAVqf8yCAlFa@solarenergyapp.ph7woum.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3005))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(userRouter);
app.use(userEfficiencyRouter);
app.use(CompanyRouter);
app.use(ItemRouter);

const port = process.env.PORT || 3004;
app.listen(port);