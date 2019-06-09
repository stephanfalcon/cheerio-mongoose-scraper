//express
const express = require("express");

const port = 3500;

const app = express();

app.listen(port,function(){
    console.log(`listening on port ${port}`);
})

module.exports = app