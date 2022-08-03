var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({ 
  title: String,
  author: String,
  pages: Number,
  genres: [String],
  rating: String
});

var Book = mongoose.model("BookModel", bookSchema);
module.exports = Book;

Book.find({ $and: [{pages: { $gt: 200 } }, { pages: { $lt: 500 } }]}).exec(function(err, books){
	//console.log(books)
})

Book.find({rating:{"$lt":5}}).sort({author:1}).exec( function(err, books) {
    //console.log(books)
});

Book.find({genres:"Fiction"}).skip(2).limit(3).exec(function(err, books){
    //console.log(books)
});
