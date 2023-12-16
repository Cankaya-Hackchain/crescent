const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const ItemSchema = new Schema(
    {
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
        is_blacklist: {
            type: Number,
            required: true,
        },
        company_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company",
            required: true,
        },
        tramerRecord: {
            type: Number,
            required: false,
        },
        damageRecord: {
            type: Number,
            required: false,
        },
        marketPrice: {
            type: Number,
            required: false,
        },
        lastUpdateDate: {
            type: Date,
            required: false,
        },
        yearlyEnflationRate: {
            type: Number,
            required: false,
        },
    },
    { timestamps: true }
);

const Item = model("Item", ItemSchema);

module.exports = Item;