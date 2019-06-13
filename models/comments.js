const mongoose = require("mongoose")

const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment = {type:String,required:true},
    date = {type:String,required:true},
    
    note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
    }
})

const comments = mongoose.model("comments",commentSchema)

module.exports = comments