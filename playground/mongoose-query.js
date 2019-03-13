var {mongoose} = require('./../server/db/mongoose')
var {ObjectID} = require('mongodb')


// var {Todo} = require('./../server/models/todo')
// console.log(Todo)
var {User} = require('./../server/models/user')
var express =require('express')
var app = express()
console.log(User)
// var id = '5c8327f00ecd603d1cb04c35'

// if(!ObjectID.isValid(id)){  // to validate ids
//     console.log('ID is not valid')
// }

// app.get('/todo',(req,res)=>{
//     res.send
// })

// Todo.find(
//     { 
//         _id:id
// }).then((todos)=>{
//     if(!todos){
//         return console.log('there is nothing to return')
//     }

//   console.log(todos)

// },(e)=>{

//    console.log(e)
// })

// Todo.findOne(
//     {
//         _id: id
//     }
// ).then((todo)=>{
//     if(!todo){
//         return console.log('there is nothing to return')
//     }
//    console.log(todo)
// })

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('there is nothing to return')
//     }
//     console.log(todo)
//  })


User.findById('5c858cddcc2845c453a307dc').then((user)=>{
    if(!user){
        console.log('user name not found')
    }

    console.log(user)
},(e)=>{
    console.log(e)
})
// User.insertOne({email:'ukachukwujoshua95@gmail.com'}).then((user)=>{
//     console.log(user)
// })
// User.findById(id).then((user)=>{
//       if(!user){
//           console.log('No user found')
//       }
//       console.log(user)
// },(e)=>{
//     console.log(e)
// })
