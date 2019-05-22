const express = require('express')


const createRouter = function(collection){

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error:err});
    });
  });


  router.post('/', (req, res) => {
    const newData = req.body
    console.log("i am in the router",req);
    collection
    .insertOne(newData)
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error:err});
    })
  })

  return router;
}

module.exports = createRouter
