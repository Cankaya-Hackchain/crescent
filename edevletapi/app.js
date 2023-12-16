const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/user.router");
const companyRouter = require("./routers/company.router");
const addressRouter = require("./routers/address.router");
const customerRouter = require("./routers/customer.router");
const userEfficiencyRouter = require("./routers/userEfficiency.router");
const app = express();

const dbURI =
  "mongodb+srv://mongocuBiraderler:y3M7FAVqf8yCAlFa@solarenergyapp.ph7woum.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(userRouter);
app.use(companyRouter);
app.use(addressRouter);
app.use('/customer',customerRouter);
app.use(userEfficiencyRouter);

const port = process.env.PORT || 3000;
app.listen(port);