const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const buyers = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: false
    },
    address: {
        type: String,
        required: true
    },
},{
    timestamps: true
})

module.exports = mongoose.model("buyers", buyers, "buyers");
