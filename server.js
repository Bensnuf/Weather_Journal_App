// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;

const server = app.listen(port, listening);

function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

app.get("/all", function (req, res) {
    res.send(weatherData);
    console.log("Appears to work"); //this can likely be deleted
});

const weatherData = [];

app.post("/all", addWeather);

function addWeather(req, res) {
    let newEntry = {
        temperature: req.body.temp,
        date: req.body.date,
        userResponse: req.body.content, //not sure on this part
    };
    weatherData.push(newEntry);
    res.send(weatherData); //likely all but may need from class below
    console.log(weatherData);
}
