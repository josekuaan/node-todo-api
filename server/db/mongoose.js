var mongoose = require('mongoose')

mongoose.Promise = global.Promise

var url = 'mongodb://localhost:27017/TodoApp'
var dbName = "TodoApp"
mongoose.connect(url,{useNewUrlParser:true})



module.exports = {mongoose}