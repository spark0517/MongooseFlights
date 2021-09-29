const Flight = require("../models/flight")

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flight){
        res.render("flights/show", {airline: "Airline Detail", flight});
    })
}

function index(req, res){
    Flight.find({}, function(err, flightsDocuments){
        res.render("flights/index", {flightsDocuments})
    })
}

function newFlight(req, res){
    res.render("flights/new")
}

function create(req, res){
    req.body.date = parseInt(req.body.date);
    req.body.flightNo = parseInt(req.body.flightNo);
    req.body.departs = parseInt(req.body.departs);
    req.body.arrivals = parseInt(req.body.arrivals);

    Flight.create(req.body, function(err, createdFlight){
        if(err) {
            return res.redirect('/flights/new');
        }
        res.redirect('/flights')
    })
}