var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xuanba99:12345678Ba@cluster0-nuumk.mongodb.net/banphukien?retryWrites=true&w=majority"; 
var ProductDAO = {
    insert: function(product){ //ham insert
        //insert to MondoBD
        return new Promise(function(resolve, reject){
            +
            MongoClient.connect(url, function (err, db) { 
                if(err) throw err;
                var dbo= db.db("banphukien");
                dbo.collection("product").insertOne(product, function(err, res){
                    if(err) return  reject(err);
                    resolve(res.insertedCount>0? true: false);
                    
                });
            });
        });
       
        // return false;
    } ,
    getAll:function(){
        return new Promise(function(resolve, reject){
            
            MongoClient.connect(url, function (err, db) { 
                if(err) throw err;
               
                var dbo= db.db("banphukien");
                var query={};
                dbo.collection("product").find(query).toArray(function(err, res){
                    if(err) return  reject(err);
                    resolve(res);
                   db.close();
                    
                });
            });
        });
    },
    getDetail:function(id){
        return new Promise(function(resolve, reject){
            MongoClient.connect(url, function (err, db) { 
                if(err) throw err;
                var dbo= db.db("banphukien");
                var ObjectId=require('mongodb').ObjectId;
                var query={_id:ObjectId(id)};
                dbo.collection("product").findOne(query, function(err, res){
                    if(err) return  reject(err);
                    resolve(res);
                   db.close();
                    
                });
            });
        });
    },
    delete: function (id) {
        return new Promise(function (resolve, reject) {
            MongoClient.connect(url, function (err, db) {
            if (err) reject(err);
            var dbo = db.db("banphukien");
            var ObjectId = require('mongodb').ObjectId;
            var query = { _id: ObjectId(id) };
            dbo.collection("product").deleteOne(query, function (err, res) {
              if (err) reject(err);
              resolve(res.result.n > 0 ? true : false);
              db.close();
            });
          });
        });
      },
      update: function (product) {
        return new Promise(function (resolve, reject) {
          MongoClient.connect(url, function (err, db) {
            if (err) reject(err);
            var dbo = db.db("banphukien");
            var ObjectId = require('mongodb').ObjectId;
            var query = { _id: ObjectId(product.id) };
            var newvalues = { $set: { name: product.name, price: product.price, image: product.image, ram: product.ram,memory: product.memory,detail:product.detail } };
            dbo.collection("product").updateOne(query, newvalues, function (err, res) {
              if (err) reject(err);
              resolve(res.result.nModified > 0 ? true : false);
              db.close();
            });
          });
        });
      }
     
  
}

module.exports= ProductDAO;