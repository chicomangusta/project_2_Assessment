//=============================
//      Dependencies
//=============================
const express = require("express");
const app = express();
// const methodOverride = require('method-override');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

//=============================
//          Data
//=============================
// const Pizza = require("./models/pizzas");


//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/demo-2'


// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

//================== MONGOOSE ===========================================

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
//=======================================================================


// Error / success
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
mongoose.connection.on('open', () => { });




//=============================
//  Middleware Engine
//=============================
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
//tells express to parse data from POST request:
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(express.static("public"));
//method override
// app.use(methodOverride('_method'));





//=============================
//          Routers
//=============================
app.get("/todo", (req, res) => {
    res.render("index")
});





   



//=============================
// Listening on Port 3000
//=============================
app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`);
});
