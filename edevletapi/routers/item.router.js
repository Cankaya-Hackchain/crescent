const express = require("express");
const Item = require("../Models/Item");
const router = express.Router();
const Company = require("../Models/Company");

router.post("/items", async (req, res) => {
  const item = new Item(req.body);
  let items;
  try {
    const companies = await Company.find({});
    console.log("companiesss", companies);
    console.log(companies);
    const company = companies.find(
        (comp) => comp.companyName === req.body.companyName
    );
    console.log("sdlkfjdsşlm.f",company);
    console.log("companyname", req.body.companyName);

    item.company_id = company._id.toString();

    console.log("item_company_id", item.company_id);

    if (!companies) {
        throw new Error("No companies found");
    }

    const cars = await Item.find({});
    items = cars.filter((car) => car.chassisNumber === item.chassisNumber);
    if (!items) {
        const currentYear = new Date().getFullYear();
        const yearsSince = currentYear - item.year.getFullYear();
        const updatedPrice = averagePrice * Math.pow(1 + item.yearlyEnflationRate, yearsSince);

        const depreciationRate = 0.00001;
        const depreciationAmount = item.km * averagePrice * depreciationRate;
        const finalPrice = updatedPrice - depreciationAmount;
        item.marketPrice = finalPrice;
        console.log("sadsa", finalPrice);
        if (item.price > (finalPrice * 20) / 100 + finalPrice) {
        item.is_blacklist = 1;
        }

        await item.save();
        res.status(201).send(item);
    } 
    else {
        if (!items || items.length === 0) {
        return "Belirtilen özelliklere sahip araç bulunamadı.";
        }

        const totalPrices = items.reduce((sum, car) => sum + car.price, 0);

        const averagePrice = totalPrices / items.length;

        const currentYear = new Date().getFullYear();
        const yearsSince = currentYear - items[0].lastUpdateDate.getFullYear();
        const updatedPrice =
        averagePrice * Math.pow(1 + items[0].yearlyEnflationRate, yearsSince);

        const depreciationRate = 0.00001;
        const depreciationAmount = item.km * averagePrice * depreciationRate;
        const finalPrice = updatedPrice - depreciationAmount;
        item.marketPrice = finalPrice;
        console.log("sadsa", finalPrice);
        if (item.price > (finalPrice * 20) / 100 + finalPrice) {
        item.is_blacklist = 1;
        }
    }

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
