const mongoose = require('mongoose')
const isDev = process.env.NODE_ENV !== 'production'
const uri = isDev ? 'mongodb://localhost:27017/TodoApp' : "mongodb+srv://josekuaan:anyibaba@cluster0-xzqnk.mongodb.net/TodoApp?retryWrites=true" 

mongoose.Promise = global.Promise
mongoose.connect(uri,{useNewUrlParser:true})

const db = mongoose.connection;

db.on('error', console.error.bind(console,'MongoDB connnection error:'))

console.log(db)

module.exports = {mongoose}

// "mongodb+srv://josekuaan:anyibaba@cluster0-xzqnk.mongodb.net/TodoApp?retryWrites=true" || 