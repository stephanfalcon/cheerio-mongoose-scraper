const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const scraper = require("../scraper/scraper")
const orm = require("../controller/dbcoms")

router.get("/",function(req,res){
    res.render("index")

    orm.find()
})

router.get("/scraper",function(req,res){
    scraper()
})

module.exports = router
