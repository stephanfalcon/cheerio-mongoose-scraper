const mongoose = require("mongoose")

const Schema = mongoose.Schema

var articleSchema = new Schema({
    title: {type: String},
    description: {type: String},
    link: {type: String},

    note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
    }
})

var articles = mongoose.model("articles", articleSchema)

module.exports = articles