const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');;

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
   console.log('this GET is req.user', req.user);
   let queryString = `SELECT * FROM "item" WHERE "user_id" = ($1);`
   pool.query(queryString, [req.user.id])
   .then(results => res.send(results.rows))
   .catch(error=>{
       console.log('error getting items', error);
       res.sendStatus(500)
       
   })
   
});


// router.get('/', rejectUnauthenticated, (req, res) => {
//     console.log('this is req.body', req.user);
//     let queryString = `SELECT * FROM "secret" WHERE "secrecy_level" <= ($1);`
//     pool.query(queryString, [req.user.clearance_level])
//         .then(results => res.send(results.rows))
//         .catch(error => {
//             console.log('Error making SELECT for secrets:', error);
//             res.sendStatus(500);
//         });
// });

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/',rejectUnauthenticated, (req, res) => {
    console.log('this is POST req.user', req.user);
    console.log('this is POST req.body', req.body);
    let queryString = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1,$2,$3);`
    pool.query(queryString, [req.body.description, req.body.image_url, req.user.id])
        .then(()=>{
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('error posting items', error);
            res.sendStatus(500)

        })

});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated,  (req, res) => {
console.log('in delete', req.params);
const queryText = 'DELETE FROM "item" WHERE id=$1';
pool.query(queryText, [req.params.id])
    .then(() => {res.sendStatus(200);})
    .catch((err) => {
        console.log('Error in DELETE', err);
        res.sendStatus(500);
    })
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;