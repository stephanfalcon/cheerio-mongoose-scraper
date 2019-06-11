const mongoose = require("mongoose")

const Schema = mongoose.Schema

var articleSchema = new Schema({
    title: {type: String,required:true},
    description: {type: String,required:true},
    link: {type: String,required:true},

    note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
    }
})

var articles = mongoose.model("articles", articleSchema)

module.exports = articles