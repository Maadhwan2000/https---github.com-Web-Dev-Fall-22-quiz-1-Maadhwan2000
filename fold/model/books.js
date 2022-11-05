const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    id:Number,
    title:String,
    title_ar:String,
    publication_year:Number,
    publication_year_ar:Number,
    exhibitor_booth: Number,
    exhibitor_booth_ar:Number,
  /*  authors:{id:Number,
    title: String,
    title_ar: String,
    image: String}, */
})

module.exports = mongoose.model('Book',bookSchema)
