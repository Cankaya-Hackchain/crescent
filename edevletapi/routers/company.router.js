const express = require("express");
const router = express.Router();
const Company = require("../Models/Company");
const authenticateUser = require("../middleware/authenticateUser");



router.post("/companies", authenticateUser.authenticateUser,async (req, res) => {
  const company = new Company(req.body);
  company.user_id = req.user._id;
  company.numberOfRequests = 0;
  try {
    await company.save();
    res.status(201).send(company);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/companies", async (req, res) => {
  try {
    const companies = await Company.find({});
    if (!companies) {
      throw new Error("No companies found");
    }
    res.status(201).send(companies);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/companies/:id",authenticateUser.authenticateUser, async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
        throw new Error("No company found");
        }
        res.status(201).send(company);
    } catch (e) {
        res.status(500).send(e.message);
    }
});


module.exports = router;