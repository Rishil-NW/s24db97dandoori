const mongoose = require("mongoose");

const RobotsSchema = mongoose.Schema({
    Robot_type: String,
    price: { type: Number, min: 1000, max: 200000 },
    manufactured: { type: String, minlenght: 10, maxlength: 1234 }
});

module.exports = mongoose.model("Robots", RobotsSchema);
