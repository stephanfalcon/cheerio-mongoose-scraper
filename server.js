//express
const express = require("express");
const router = require("./routes/routes")
const exphbs = require("express-handlebars")
const port = process.env.PORT || 3500;

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.engine("handlebars",exphbs())
app.set("view engine","handlebars")
app.use(router)


app.listen(port,function(){
    console.log(`listening on port ${port}`);
})