// const http = require('http');
const fs = require("fs");
const express = require('express');
const path = require('path')

const app = express();
const filePath = (__dirname + "/model/data.json");
app.get("/data", function(req,res){
    const content = fs.readFileSync(filePath,"utf8");
    const cities = JSON.parse(content);
    res.send(cities);
});

const htmlPath = '../client/index.html';
const scriptPath = "../client/script/script.js";
const stylePath = "../client/style/style.css";
app.get("/", function(req,res){
    res.sendFile(path.resolve(htmlPath));

})
app.get("/style/style.css", function(req,res){
    res.sendFile(path.resolve(stylePath));
})
app.get("/script/script.js", function(req,res){
    res.sendFile(path.resolve(scriptPath));
})
app.listen(3000, function(){
    console.log("starting");
});


