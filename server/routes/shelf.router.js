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
        });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    const newItem = req.body;
    console.log(newItem);
    const queryText = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3)`;
    const queryValues = [newItem.description, newItem.image_url, newItem.user_id];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((error) => {
            console.log('Error posting new item', error);
            res.sendStatus(500);
        });
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    let item = req.params.id;
    let queryText =`REMOVE FROM "items" WHERE id=$1;`;

    pool.query(queryText, item).then((response) =>{
        console.log(response);
    }).catch((error) =>{
        console.log(error);
    })
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