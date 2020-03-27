const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');;


// Get all items
router.get('/', rejectUnauthenticated, (req, res) => {
  let queryText =
    'SELECT "id", "status", "item_name", "amount", "amount_unit", "category", "store" FROM "item" ORDER BY "store", "category", "item" ASC;';
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

// Adds a new item to the list of items
// Request body must be an item object with a name, amount number, amount unit, category & store.
router.post('/', (req, res) => {
  let newItem = req.body;
  console.log(`Adding item`, newItem);

  let queryText = `INSERT INTO "item" ("item_name", "amount", "amount_unit", "category", "store")
                   VALUES ($1, $2, $3, $4, $5);`;
  pool.query(queryText, [newItem.itemName, newItem.amountNumber, newItem.amountUnit, newItem.category, newItem.shoppingStore])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new item`, error);
      res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {

  console.log('in item PUT:', req.params.id, req.body.key);

  const id = req.params.id;
  const key = req.body.key;
  
  let queryText = `
      UPDATE "item"
      SET "status" = ${key}
      WHERE "id" = $1;`
  pool.query(queryText, [id])
  .then((result) => {
    res.sendStatus(200);
  }).catch((err) => {
    res.sendStatus(500);
  })
});

// DELETE item
router.delete('/:id', (req, res) => {
  console.log('in /item DELETE', req.params.id)
  const query = `DELETE FROM "item" WHERE id=$1;`;
  const values = [req.params.id];
  pool.query(query, values)
    .then((result) => {
      console.table(result)
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error in DELETE`, error);
      res.sendStatus(500);
    });
});


module.exports = router;
