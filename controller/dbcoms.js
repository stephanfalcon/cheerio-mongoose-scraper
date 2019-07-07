const mongoose = require("mongoose")

const db = require("../models/articles.js") // need to be changed and index needs to be added to models
const scraper = require("../scraper/scraper.js")
mongoose.connect("mongodb://localhost/news", { useNewUrlParser: true });

const orm = {
    find: function(col,cb){
        db.find({},function(err,res){
            cb(res)
        })
    },
    scrape: function(){
        scraper()
    }

    
}

module.exports = orm