const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const sellers = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: false
    },
    business_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
},{
    timestamps: true
})

module.exports = mongoose.model("sellers", sellers, "sellers");
