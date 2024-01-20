const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const requestSchema = new Schema({
    senderusername: String,
    sendername: String,
});

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;
