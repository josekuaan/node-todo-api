

var mongoose = require('mongoose')

var Todo = mongoose.model('Todos',{
    text:{                //adding validator
      type: String,
      required:true,
      minlength: 1,
      trim: true
    },
  completed:{
     type: Boolean,
     default:false
  },
  
    completedAt:{
       type: Number,
       default: null
    }
  });


  console.log('ertyu',JSON.stringify(Todo,undefined,2),'2')


  module.exports = {Todo}