"use strict";


const { response } = require("express");
const express = require("express");
require("dotenv").config();
const jsonData = require("./assets/Programming-languages.json");

const app = express();

const PORT = process.env.PORT;

// localhost:3000/
app.get("/", (req,res) => {
    res.status(200).send("home route");
})

//localhost:3000/progData
app.get("/progData", (req, res) => {
    let progData = jsonData.map((item) => {
        return new ProgLang(item)
    })
    res.status(200).send(progData)
})

class ProgLang {
    constructor(data){
        this.title = data.title;
        this.dateCreated = data.dateCreated;
        this.description = data.description;
        this.imageUrl = data.imageUrl;
    }
}




app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})