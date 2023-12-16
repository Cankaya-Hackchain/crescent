const express = require("express");
const Item = require("../Models/Item");
const router = express.Router();
const Company = require("../Models/Company");

router.post("/items",async (req, res) => {
  const item = new Item(req.body);
  let company;
  let items;
        router.get("/companies", async (req, res) => {
            try {
                const companies = await Company.find({});
                 company = companies.filter(company => company.name === req.body.name)._id;
                
                item.company_id = company._id;
                
                if (!companies) {
                throw new Error("No companies found");
                }
                res.status(201).send(companies);
            } catch (e) {
                res.status(500).send(e.message);
            }
        });
    
        router.get("/items", async (req, res) => {
            try {
                items = await Item.find(req.body.chassisNumber);
                if (!items) {
                    await item.save();
                    res.status(201).send(item);
                }
                else{
                    if (!cars || cars.length === 0) {
                        return "Belirtilen özelliklere sahip araç bulunamadı.";
                    }

                    const totalPrices = cars.reduce((sum, car) => sum + car.price, 0);

                    const averagePrice = totalPrices / cars.length;

                    const currentYear = new Date().getFullYear();
                    const yearsSinceUpdate = currentYear - cars[0].lastUpdateDate.getFullYear();
                    const updatedPrice = averagePrice * Math.pow(1 + cars[0].yearlyEnflationRate, yearsSinceUpdate);

                }
                res.status(201).send(items);
            } catch (e) {
                res.status(500).send(e.message);
            }
        });
  try {
    
    await item.save();
    res.status(201).send(item);
  } catch (e) {
    res.status(400).send(e.message);
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