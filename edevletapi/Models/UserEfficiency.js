const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const UserEfficiencySchema = new Schema(
    {
        user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        },
        physical_fitness : {
        type: Number,
        required: true,
        },
        volunteering: {
        type: Number,
        required: true,
        },
        sertificate: {
        type: String,
        required: true,
        },
        emergency_contact: {
        type: String,
        required: true,
        },
        social_media: {
        type: String,
        required: true,
        },
    },
    { timestamps: true }
    );

const UserEfficiency = mongoose.model("UserEfficiency", UserEfficiencySchema);
module.exports = UserEfficiency;