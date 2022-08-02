var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    hair: String,
    eyes: String,
    weight: Number,
    height: Number,
    salary: Number,
    numKids: Number,
    kids: []
});

var Person = mongoose.model("PersonModel", personSchema);
module.exports = Person;

Person.find({
    height: {
        $gt: 180
    },
    salary: {
        $gte: 30000
    }
}).exec(function (err, people) {
    // console.log(people)
})

Person.find({ $or:[{ height: { $gt: 180 } },{ salary: { $gt: 30000 } }] }).exec(function (err, people) {
   // console.log(people)
})
Person.find().and([
     { $or: [{hair:"grey"},
      {eyes:"grey"}] },
      { weight:{"$lt": 70} } 
    ]).exec(function(err, people){
         console.log(people) })