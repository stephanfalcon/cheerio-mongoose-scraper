const express = require("express")
const router = express.Router()
// const mongoose = require("mongoose")
const scraper = require("../scraper/scraper")
const orm = require("../controller/dbcoms")

router.get("/",function(req,res){
    
    orm.find(0,function(data){
        var hbsObject = {
            articles: data
        };
        res.render("index",hbsObject)
    })

    
    
})

router.get("/scraper",function(req,res){
    scraper()
})

module.exports = router
