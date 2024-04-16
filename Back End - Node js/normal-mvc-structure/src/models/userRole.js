const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const userRole = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    roleId: {
        type: Schema.Types.ObjectId,
        required: true
    },
},{
    timestamps: true
})

module.exports = mongoose.model("userRole", userRole, "userRole");
