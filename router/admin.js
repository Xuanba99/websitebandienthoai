var express = require('express');
var router= express.Router(); 
 //middleware
var multer = require('multer');
var upload =multer({});
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({}));
var blogDAO = require('../daos/blogDAO.js');
var advantiseDAO = require('../daos/advantiseDAO.js');
var productDAO = require('../daos/productDAO.js');
var adminDAO = require('../daos/adminDAO.js');
var orderDAO = require('../daos/orderDAO.js');
var feedbackDAO = require('../daos/feedbackDAO.js');
// router.get('/addblog', function(req,res){             //render ra trang quản lí bài viết
//     res.render('blog.ejs');
// });
router.get('/', function(req,res){             //render ra trang quản lí bài viết
    res.redirect('/admin/login');
});
router.get('/home', function(req,res){              //render ra trang chủ
    if(req.session.admin){
        res.render('index.ejs');
    }else{
        res.redirect('/admin/login');
    }
});

router.get('/login', function(req,res){
    res.render('login.ejs');
});

//render ra trang quản lí các bài quảng cáo
router.get('/addadvertise',async function(req,res){
    var advertises=await advantiseDAO.getAll();
    var adver = null;
    if (req.query.id) adver = await advantiseDAO.getDetail(req.query.id);
   
    var sizePage = 5;
    var noPages = Math.ceil(advertises.length / sizePage);
    var curPage = 1;
    if (req.query.page) curPage = req.query.page;
    var offset = (curPage - 1) * sizePage;
    advertises = advertises.slice(offset, offset + sizePage);
    // render view
    if(req.session.admin){
        res.render('advantise.ejs',{advertises:advertises,noPages: noPages,curPage:curPage,prod:adver});
    }else{
        res.redirect('/admin/login');
    }
   
});
  //đơn đặt hàng
router.get('/order',async function(req,res){
    var orders=await orderDAO.getAll();
    if(req.session.admin){
        res.render('order.ejs',{orders:orders});
    }else{
        res.redirect('/admin/login');
    }
});
//update status order
router.get('/updatestatus',async function(req,res){
    var id=req.query.id;
    var status = req.query.status;
    var result = await orderDAO.update(id, status);
    res.redirect('/admin/order');

});
router.get('/feedback', async function(req,res){
    var feedbacks=await feedbackDAO.getAll();
    var sizePage = 5;
    var noPages = Math.ceil(feedbacks.length / sizePage);
    var curPage = 1;
    if (req.query.page) curPage = req.query.page;
    var offset = (curPage - 1) * sizePage;
    feedbacks = feedbacks.slice(offset, offset + sizePage);
    // render view
    if(req.session.admin){
        res.render('feedback.ejs',{feedbacks:feedbacks,noPages: noPages,curPage:curPage});
    }else{
        res.redirect('/admin/login');
    }
});

//ket nối với mongodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xuanba99:12345678Ba@cluster0-nuumk.mongodb.net/banphukien?retryWrites=true&w=majority";

//chả về id từ đẻ xem chi tiết
router.get('/chi-tiet/:id', function (req, res) {   
    var id = req.params.id;
    MongoClient.connect(url, function (err,db) {
        if (err) throw err;
        var dbo = db.db('banphukien');
        var ObjectId = require('mongodb').ObjectId;
        var query = { _id: ObjectId(id) };
        dbo.collection('product').findOne(query, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    });
});
//đăng nhập
router.post('/login',async function(req,res){
    var username = req.body.Name;
    var password = req.body.Password;
   
    var admin = await adminDAO.selectByUsernameAndPassword(username,password);
    if(admin){
        req.session.admin=admin;
        res.redirect('/admin/home');
    }else{
        res.redirect("/admin/login");
    }

});
//đăng xuất
router.get('/logout', function (req, res) {
    delete req.session.admin;
    res.redirect('/admin/home');
  });
//get sản pham len admin
router.get('/addblog', async function(req,res){
    var blogs = await blogDAO.getAll();
    var blog = null;
    if (req.query.id) blog = await blogDAO.getDetail(req.query.id);
    // pagination
    var sizePage = 5;
    var noPages = Math.ceil(blogs.length / sizePage);
    var curPage = 1;
    if (req.query.page) curPage = req.query.page;
    var offset = (curPage - 1) * sizePage;
    blogs = blogs.slice(offset, offset + sizePage);
    // render view
     
        res.render('blog.ejs', {prods: blogs, prod: blog, noPages: noPages,curPage:curPage });
});

//trả về api trang blog
router.get('/blog', function (req, res) {
    var newFeedback = req.body; //body là bodyparser
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("banphukien"); 
        var query = {};
        dbo.collection('blog').find(query).toArray(function (err, result) {
            if (err) throw err;
          
            res.json(result);
        });
    });
});
//post bài viết lên trang blog
router.post('/addblog',upload.single('fileImage'), async function(req,res){
    var name = req.body.txtName;
    var content = req.body.txtContent;
    
    if(req.file){
        var image = req.file.buffer.toString("base64"); //get name file image
        var blog ={name:name, content:content, image:image};
        var result = await blogDAO.insert(blog);
        if(result){
            res.send("Good");
        }else{
            res.send('sorry baby');
        }
    }
});
//thêm quảng cáo
router.post('/addvertise',upload.single('fileImage'), async function(req,res){
    var name = req.body.txtName;
    
    if(req.file){
        var image = req.file.buffer.toString("base64"); //get name file image
        var blog ={name:name,image:image};
        var result = await advantiseDAO.insert(blog);
        if(result){
            res.send("Good");
        }else{
            res.send('sorry baby');
        }
    }
});
//thêm sản phẩm
router.post('/product',upload.single('fileImage'), async function(req,res){
    var name = req.body.txtName;
    var hang = req.body.txtHang;
    var detail = req.body.txtDetail;
    var ram = req.body.txtRam;
    var memory = req.body.txtMemory;
    var price = parseInt(req.body.txtPrice);
    console.log(req.body);

    if(req.file){
        var image = req.file.buffer.toString("base64"); //get name file image
        var blog ={name:name,hang:hang,detail:detail,price:price,image:image,ram:ram,memory:memory};
        var result = await productDAO.insert(blog);
        if(result){
            res.redirect("/admin/product");
          }else{
            res.redirect("/admin/product");
          }
    }
});
//xem sản phẩm get id
router.get('/product', async function(req,res){  //render ra quản lí sản phẩm
    var products = await productDAO.getAll();
    var product = null;
    if (req.query.id) product = await productDAO.getDetail(req.query.id);
    // pagination
    var sizePage = 5;
    var noPages = Math.ceil(products.length / sizePage);
    var curPage = 1;
    if (req.query.page) curPage = req.query.page;
    var offset = (curPage - 1) * sizePage;
    products = products.slice(offset, offset + sizePage);
    // render view
     
        res.render('product.ejs', {prods: products, prod: product, noPages: noPages,curPage:curPage });
    
});
 
 
//delete sản phẩm
 
router.post('/deleteproduct', upload.single('fileImage'), async function (req, res) {
    var id = req.body.txtID;
    var result = await productDAO.delete(id);
    if(result){
        res.redirect('/admin/product');
    }else{
        res.redirect('/admin/product');
    }
  });


//get api san pham
router.get('/productapi', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("banphukien"); 
        var query = {};
        dbo.collection('product').find(query).toArray(function (err, result) {
            if (err) throw err;
            
            res.json(result);
        });
    });
});
//đẩy datta collection adverise lên api.
router.get('/advertise', function (req, res) {
    var newFeedback = req.body; //body là bodyparser
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("banphukien"); 
        var query = {};
        dbo.collection('advertise').find(query).toArray(function (err, result) {
            if (err) throw err;
             
            res.json(result);
        });
    });
});
//update sản phẩm
router.post('/updateproduct', upload.single('fileImage'), async function (req, res) {
    var id = req.body.txtID;
    var name = req.body.txtName;
    var ram = req.body.txtRam;
    var memory = req.body.txtMemory;
    var detail = req.body.txtDetail;
    var price = parseInt(req.body.txtPrice);
    var hang = req.body.txtHang;
    if (req.file) {
      var image = req.file.buffer.toString('base64');
      var product = { id: id, name: name, price: price, image: image, ram: ram,memory:memory,detail:detail,hang:hang };
      var result = await productDAO.update(product);
      if(result){
        res.redirect("/admin/product");
      }else{
        res.redirect("/admin/product");
      }
    }
  });
 //delete blog
 
router.post('/deleteblog', upload.single('fileImage'), async function (req, res) {
    var id = req.body.txtID;
    var result = await blogDAO.delete(id);
    if(result){
        res.redirect('/admin/addblog');
    }else{ 
        res.redirect('/admin/addblog');
    }
  });
  //update blog
  router.post('/updateblog', upload.single('fileImage'), async function (req, res) {
    var id = req.body.txtID;
    var name = req.body.txtName;
    var content = req.body.txtContent;
    if (req.file) {
      var image = req.file.buffer.toString('base64');
      var blog = { id: id, name: name, content: content, image:image};
      var result = await blogDAO.update(blog);
      if(result){
        res.redirect("/admin/addblog");
      }else{
        res.redirect("/admin/addblog");
      }
    }
  });
  //delete advertise
 
router.post('/deleteadvertise', upload.single('fileImage'), async function (req, res) {
    var id = req.body.txtID;
    var result = await advantiseDAO.delete(id);
    if(result){
        res.redirect('/admin/addadvertise');
    }else{ 
        res.redirect('/admin/addadvertise');
    }
  });
  //update blog
  router.post('/updateadvertise', upload.single('fileImage'), async function (req, res) {
    var id = req.body.txtID;
    var name = req.body.txtName;
     
    if (req.file) {
      var image = req.file.buffer.toString('base64');
      var advertise = { id: id, name: name, image:image};
      var result = await advantiseDAO.update(advertise);
      if(result){
        res.redirect("/admin/addadvertise");
      }else{
        res.redirect("/admin/addadvertise");
      }
    }
  });



 
module.exports=router;


