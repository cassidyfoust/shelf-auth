const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();


/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    pool.query('SELECT * FROM "item";')
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for items:', error);
            res.sendStatus(500);
        });// For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {

});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', rejectUnauthenticated, (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', rejectUnauthenticated, (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {

});

module.exports = router;