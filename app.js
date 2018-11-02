const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
//Mongoose allows us to have access to the MongoDB commands.
const mongoose = require("mongoose");
require('./models/UrlShortener');
const app = express();


const mongoURI = "process.env.MONGODB_URI";
const port = process.env.PORT || 3000;

const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
};

//what does this do?
mongoose.Promise = global.Promise;


mongoose.connect(mongoURI, connectOptions, (err, db) => {
	//using string literals ?
  if (err) {
  	console.log(`Error`, err);
  } else {
  	console.log(`Connected to MongoDB`);
  }  
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
  
app.use(express.static(path.join(__dirname , "front")));

app.listen(port , function () {
	console.log("Application started at: " + port);
});

require("./routes/urlshorten")(app);
 