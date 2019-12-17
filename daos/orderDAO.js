var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xuanba99:12345678Ba@cluster0-nuumk.mongodb.net/banphukien?retryWrites=true&w=majority"; 
var OrderDAO = {
    insert: function(order){ //ham insert
        //insert to MondoBD
        return new Promise(function(resolve, reject){
            +
            MongoClient.connect(url, function (err, db) { 
                if(err) throw err;
                var dbo= db.db("banphukien");
                dbo.collection("order").insertOne(order, function(err, res){
                    if(err) return  reject(err);
                    resolve(res.insertedCount>0? true: false);
                    
                });
            });
        });
       
        // return false;
    },
    getAll:function(){
        return new Promise(function(resolve, reject){
            MongoClient.connect(url, function (err, db) { 
                if(err) throw err;
                var dbo= db.db("banphukien");
                var query={};
                dbo.collection("order").find(query).toArray(function(err, res){
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
                dbo.collection("order").findOne(query, function(err, res){
                    if(err) return  reject(err);
                    resolve(res);
                   db.close();
                    
                });
            });
        });
    },
    update:function(id,newStatus){
        return new Promise(function(resolve, reject){
            MongoClient.connect(url, function (err, db) { 
                if(err) throw err;
                var dbo= db.db("banphukien");
                var ObjectId=require('mongodb').ObjectId;
                var query={_id:ObjectId(id)};
                var newvalues={$set:{status:newStatus}};
                dbo.collection("order").updateOne(query, newvalues, function(err, res){
                    if(err)  reject(err);
                    resolve(res.result.nModified>0? true:false);
                   db.close();
                });

            });
        });
    }
}
module.exports =OrderDAO;