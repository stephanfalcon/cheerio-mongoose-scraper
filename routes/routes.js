const express = require("express")
const router = express.Router()
const path = require("path")
const scraper = require("../scraper/scraper")

router.get("/",function(req,res){
    res.render("index")
})

module.exports = router
