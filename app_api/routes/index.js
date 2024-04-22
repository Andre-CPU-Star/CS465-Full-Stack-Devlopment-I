const express = require('express'); // Express app
const router = express.Router(); // Router logic
const jwt = require('epress-jwt');
const auth = require({
    secret: process.env.JWT_SECRET, userProperty: 'payload'
});

// This is where we import the controllers we will route
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

// Define route for our trips' endpoint
// router.get('/trips', tripsController.tripslist);

router
    .route('/login')
    .post(authController.login);

 // GET Method routes tripsList
router
    .route('/register')
    .post(authController.register);

    router
    .route('/trips')
    .get(tripsController.tripslist)
    .post(auth, tripsController.tripsAddTrip);

 // GET Method routes tripsFindByCode - require parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;