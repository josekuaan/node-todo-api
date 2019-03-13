var mongoose = require('mongoose')


console.log('hi')
var User = mongoose.model('User',{ // set the configuration object that users will require
  email:{                //adding validator
    type: String,
    required:true,
    minlength: 1,
    trim: true
     },
     
  })
  // console.log(email)
  // console.log('yesoo===',user)
module.exports = {User}



