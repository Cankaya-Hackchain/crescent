const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const ProductScheme = new Schema(
    {
        companyName: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        year: {
            type: Number,
            required: false,
        },
        km: {
            type: Number,
            required: false,
        },
        chassisNumber: {
            type: String,
            required: false,
        },
        tramerRecord: {
            type: Number,
            required: false,
        },
        damageRecord: {
            type: Number,
            required: false,
        },
        lastUpdateDate: {
            type: Number,
            required: false,
        },
        yearlyEnflationRate: {
            type: Number,
            required: false,
        },
    },
    { timestamps: true }
);

const Product = model("Product", ProductScheme);

module.exports = Product;