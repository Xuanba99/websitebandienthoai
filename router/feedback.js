var express = require('express');
var router= express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xuanba99:12345678Ba@cluster0-nuumk.mongodb.net/banphukien?retryWrites=true&w=majority";
var productDAO = require('../daos/productDAO.js');


router.post('/', function (req, res) {
    var newFeedback = req.body; //body là bodyparser
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('banphukien');
        dbo.collection('form').insertOne(newFeedback, function (err, result) {
            if (err) throw err;
            var kq = false;
            if (result.insertedCount > 0)
                kq = true;
            console.log(kq);
            res.json(kq);
        });
    });
    
});
 
//add tocart
router.post('/add2cart', async function (req, res) {
    var quantity = req.query.txtQuantity;
    var id = req.query.txtID;
    // create empty cart if not exists in the session, otherwise get out mycart from the session
    var mycart = [];
    if (req.session.mycart) mycart = req.session.mycart;
    var index = mycart.findIndex(x => x.product._id == id); // check if the id exists in mycart
    if (index == -1) { // not found, push newItem
      var newItem = { quantity: quantity,id:id };
      mycart.push(newItem);
    } else { // increasing the quantity
      mycart[index].quantity += quantity;
    }
    req.session.mycart = mycart; // put mycart back into the session
    //console.log(req.session.mycart); // for DBUG
    
  });
  router.post('/order', function (req, res) {
    var newFeedback = req.body; //body là bodyparser
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('banphukien');
        dbo.collection('order').insertOne(newFeedback, function (err, result) {
            if (err) throw err;
            var kq = false;
            if (result.insertedCount > 0)
                kq = true;
            console.log(kq);
            res.json(kq);
        });
    });
    
});

 
 

module.exports= router;


