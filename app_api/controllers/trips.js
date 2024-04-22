const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');
const User = mongoose.model('users');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client

const tripslist = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // No filter, return all records
        .exec();

    // Uncomment the following line to show results of query on the console
    // console.log(q);

    if(!q) {
        // Database returned no data
        return res
            .status(404)
            .json(err);
    } else {
        // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

// GET: /trips/:tripcode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({ 'code' : req.params.tripCode }) // Return single record
        .exec();

    // Uncomment the following line to show results of query on the console
    // console.log(q);

    if(!q) {
        // Database returned no data
        return res
            .status(404)
            .json(err);
    } else {
        // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

const tripsAddTrip = async (req, res) => {
    getUser(req, res,
        (req, res) => {
    Trip 
        .create({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
    },

    (err, trip) => {
        if (!q) {
            // Database returned no data
            return res
                .status(400)
                .json(err);
        } else { // Return new trip
            return res
                .status(201) // Sucessfully created
                .json(q);
        }
    });
}
    )

}
        
        // Show results of operation
        // console.log(q);


const tripsUpdateTrip = async (req, res) => {
    getUser(req, res,
        (req, res) => {
    Trip 
        .findOneAndUpdate(
        { 'code': req.params.tripCode },
            {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description,
        })

        .exec();

        if(!q) {
            // Database returned no data
            return res
            .status(400)
            .json({ error: "Trip not found" })
            // .json(err);
        } else {
            return res
            .status(201)
            .json(q);
        }
    }
)
    
};

module.exports = {
    tripslist,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};