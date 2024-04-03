const mongoose = require("mongoose")
const RobotsSchema = mongoose.Schema({
Robot_type: String,
price: Number,
manufactured: String
})
module.exports = mongoose.model("Robots",
RobotsSchema)