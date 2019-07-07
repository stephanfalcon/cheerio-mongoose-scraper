const cheerio = require("cheerio")
const axios = require("axios")
const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect("mongodb://localhost/news", { useNewUrlParser: true });

let scraper = function(){
    axios.get("https://www.nytimes.com/section/technology")
    .then(function(res){
        var $ = cheerio.load(res.data)
        
        $("li div a").each(function(){
            // console.log("=======================")
            
            var article = {}

            article.title = $(this).children("h2").text()
            article.description = $(this).children("p").text()
            article.link = $(this).attr("href")
            // console.log(db.articles)

            db.articles.create(article)
                .then(function(results){
                    console.log(results)
                }).catch(function(err){
                    console.log(err)
                })
            
        })
    })
}

module.exports = scraper

