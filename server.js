//express
const express = require("express");
const router = require("./routes/routes")
const port = 3500;

const app = express();

app.use(router)

app.listen(port,function(){
    console.log(`listening on port ${port}`);
})