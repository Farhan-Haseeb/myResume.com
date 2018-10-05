import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

// SETTING PACKAGES WITH EXPREES ROUTES
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
// SET TO LOOK IN "PUBLIC" DIRECTORY 
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
    res.render("portfolio")
})

app.get("/user/login", (req, res) => {  

})

app.post("/user/login", (req, res) => {

})

app.get("/signIn", (req, res) => {

})

app.post("/signIn", (req, res) => {

})

// app.get("/user/(someID OR name)/portfolio", (req, res) => {

// })

// app.get("/user/(someID OR name)/privacy-settings", (req, res) => {

// })
// app.get("user/(someID OR name)/myInsights", (req, res) => {

// })

app.listen(4400, () => console.log("Server running on port 4400"));