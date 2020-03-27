const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');;


// Get all items
router.get('/', rejectUnauthenticated, (req, res) => {
    let queryText =
      'SELECT "id", "status", "item_name", "amount", "amount_unit", "category", "store" FROM "item" ORDER BY "category", "item" ASC;';
    pool.query(queryText).then(result => {
      // console.log(`Got these items in the list:`, result.rows);
      // Sends back the results in an object
      res.send(result.rows);
    })
      .catch(error => {
        console.log('error getting items', error);
        res.sendStatus(500);
      });
  });
    

module.exports = router;