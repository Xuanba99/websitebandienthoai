var express = require("express");
var app = express();
const path = require("path");
// app.listen(1903);

app.use(express.static(__dirname + "/views"));

//middel ware
var cors = require("cors"); //allow cross-origin requests
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); //không có dòng này thì khi đăng nhập sẽ ko lấy được giá trị từ body gửi lên

app.use(bodyParser.json()); //không có dòng này thì post giá trị lên data không nhận đc
var session = require("express-session");
app.use(session({ secret: "sonkk123" }));
app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});
// //template engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/user", require("./router/feedback.js"));
app.use("/admin", require("./router/admin.js"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
