const Destination = require("../models/flight");

module.exports = {
    create,
}

function create(req,res){
    Destination.findById(req.params.id, function(err, destinationDocument){
        destinationDocument.destinations.push(req.body);
        destinationDocument.save(function(err){
            res.redirect(`/flights/${req.params.id}`)
        })
    })
}
