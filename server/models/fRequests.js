const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fRequestSchema = new Schema({
    senderusername: String,
    sendername: String,
});

const FRequest = mongoose.model("FRequest", fRequestSchema);
module.exports = FRequest;