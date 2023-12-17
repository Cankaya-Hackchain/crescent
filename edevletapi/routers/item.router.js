const express = require("express");
const Item = require("../Models/Item");
const router = express.Router();
const Company = require("../Models/Company");
const { get } = require("mongoose");

router.post("/items", async (req, res) => {
    console.log("req.body", req.body);
  const item = new Item(req.body);
  console.log("item", item);
  let items;
  try {
    const companies = await Company.find({});
    console.log(companies);
    const company = companies.find(
        (comp) => comp.companyName === req.body.companyName
    );
    console.log("companyname", req.body.companyName);

    item.company_id = company._id.toString();
   

    console.log("item_company_id", item.company_id);

    if (!companies) {
        throw new Error("No companies found");
    }
    if(item.year == 2023){
        item.marketPrice = item.price;
        item.is_blacklist = 0;
        await item.save();
    res.status(201).send(item);
    }

    const cars = await Item.find({});
    items = cars.filter((car) => car.chassisNumber === item.chassisNumber);
    console.log("gelenitem:", items)
    if (items.length > 0) {
        console.log("girdi");
        // items = cars.filter((car) => {car.year > item.year && });

        // const currentYear = new Date().getFullYear();
        // const yearsSince = currentYear - item.year.getFullYear();
        // const updatedPrice = averagePrice * Math.pow(1 + item.yearlyEnflationRate, yearsSince);
        // const depreciationRate = 0.00001;
        // const depreciationAmount = item.km * averagePrice * depreciationRate;
        // console.log("depreciationAmount", depreciationAmount);
        // console.log("updatedPrice", updatedPrice)
        // const finalPrice = depreciationAmount - updatedPrice ;
        // item.marketPrice = finalPrice - item.damageRecord;
        // console.log("sadsa", item.marketPrice);

        console.log("giridi2");
        const getLastPrice = items[items.length - 1].price;
        const marketPrice = (getLastPrice * ((2023 - item.lastUpdateDate)/2))-item.damageRecord-item.km/12;
        item.lastUpdateDate = 2023;
        if(item.price > marketPrice){
            item.is_blacklist = 1;
            console.log("blacklist1")
        }
        else{
            item.is_blacklist = 0;
            console.log("blacklist0")
        }
        item.marketPrice = marketPrice;
    } 
      if(item.is_blacklist !== 1 && item.is_blacklist !== 0)
      {
        console.log("blacklist2")
        item.is_blacklist = 0;
      }
    console.log("sonprice", item)
    await item.save();
    res.status(201).send(item);
} catch (e) {
  res.status(400).send(e.message);
}

});

router.get("/items-blacklist", async (req, res) => {
  try {
    const items = await Item.find({ is_blacklist: 1 });
    if (!items) {
      throw new Error("No items found");
    }
    res.status(201).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/items", async (req, res) => {
  try {
    const items = await Item.find({});
    if (!items) {
      throw new Error("No items found");
    }
    res.status(201).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/items/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      throw new Error("No item found");
    }
    res.status(201).send(item);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
