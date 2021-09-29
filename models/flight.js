const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new mongoose.Schema ({
    destination: String,
    arrivals: Date
});

const ticketSchema = new mongoose.Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: {type: Number, min: 0},
    flight: Schema.Types.ObjectId
});

const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema],
    tickets: [ticketSchema]
})


module.exports = mongoose.model("Flight", flightSchema)