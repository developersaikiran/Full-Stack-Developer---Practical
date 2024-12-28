const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const roles = new Schema({
    role: {
        type: String,
        required: true
    },
},{
    timestamps: true
})

module.exports = mongoose.model("roles", roles, "roles");
