// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Click schema
var Click = require("./models/Article");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8080;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//setting up for heroku deployment
if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI)
}
else{
  mongoose.connect("mongodb://localhost/nytreact");
}

const db = mongoose.connection;

db.on("error", err => {
  console.log("Mongoose Error: ", err);
});

db.once("open", () => {
  console.log("Mongoose connection successful.");
});



//require our Article model
var Article = require("./models/Article.js");

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/home", function(req, res) {
  //test that the server is working
  res.json({data: ['a', 'b', 'c']});
  //console.log('get works');
  res.sendFile(__dirname + "/public/index.html");
  // var result = {};

});

app.get('/api/lostitem', (req, res) => {
  Article.find({}).exec((err, allItems) => {
    console.log(allItems)
    res.json(allItems)
  })
})

//this is to test the database
app.post('/api/new/lostitem', (req, res) => {
  // get the post item
  const { title, date, url } = req.body
  // console.log(name)
  // console.log(found)

  const newArticle = new Article({ title: title, date: date, url: url })

  newArticle.save((err, savedArticle) => {
    if (err) {
      return res.json({ error: 'there was an error saving the item' })
    } else {
      // console.log(savedItem)
      return res.json(savedArticle)
    }
  })
})






// -------------------------------------------------

// Starting our express server
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
