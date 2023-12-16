const { Schema, model } = require("mongoose");
const validator = require("validator");
const mongoose = require("mongoose");

const CompanySchema = new Schema(
    {
        companyName: {
        type: String,
        required: true,
        },
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

const Company = model("Company", CompanySchema);

module.exports = Company;