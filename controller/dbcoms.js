const mongoose = require("mongoose")

const db = require("../models/articles.js") // need to be changed and index needs to be added to models
const scraper = require("../scraper/scraper.js")
mongoose.connect("mongodb://heroku_gpqztw2q:l1c3adaa1grfs54bpnio4tf7ln@ds347917.mlab.com:47917/heroku_gpqztw2q", { useNewUrlParser: true });

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