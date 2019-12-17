var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xuanba99:12345678Ba@cluster0-nuumk.mongodb.net/banphukien?retryWrites=true&w=majority"; 
var FeedbackDAO = {
    getAll:function(){
        return new Promise(function(resolve, reject){
            
            MongoClient.connect(url, function (err, db) { 
                if(err) throw err;
               
                var dbo= db.db("banphukien");
                var query={};
                dbo.collection("form").find(query).toArray(function(err, res){
                    if(err) return  reject(err);
                    resolve(res);
                   db.close();
                    
                });
            });
        });
    }
   
     
      
     
  
}

module.exports= FeedbackDAO;