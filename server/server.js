var express = require('express')

const {ObjectID} = require('mongodb')

var body_parser = require('body-parser')


const port = process.env.PORT || 3000

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app = express();

app.use(body_parser.json())

 app.post('/users', (req,res)=>{
  console.log(req.body)
   let user = new User({     
     email:req.body.text
   });

   user.save().then((result)=>{
        res.send(result)
   },(e)=>{
     res.send(e)
   })
  })


app.post('/todos',(req,res)=>{
  // console.log(req.body)
 
   var todo = new Todo({
      text: req.body.text
   })

  todo.save().then((doc)=>{
    res.send(doc)
  },(e)=>{
    res.status(400).send(e)
  })
})



app.get('/todos',(req,res)=>{

  Todo.find().then((todos)=>{

     res.send({todos})

  },(e)=>{
    res.status(400).send(e)
  })
});

// my own API route config
app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;

  if(ObjectID.isValid(id)){

    Todo.findById(id).then((todo)=>{
      if(todo){
      return res.status(200).send(
         {
           todo
           
         }
         )
         
        }else{
         return res.status(400).send('Could not find matching id')
       }
       },(e)=>{
        res.status(400).send('Could not find the todo',e)
     })
   }else{
     res.status(404).send('Invalid id or something')
    }

  },(e)=>{
    res.status(400).send()
  });



  //api route for updating todoApp

  app.patch('todos/:id',(req,res)=>{
    var id = req.body.id
    var body = _.pick(req.body,['text','completed'])

    if(!ObjectID.isValid(id)){
      res.status(400).send()
    }else{
      if(_.isBoolean(body.completed && body.comleted)){
        body.completedAt = new Date().getTime 
      }else{
        body.completed = false;
        body.completedAt = null;
      }
      Todo.findByIdAndUpdate(id,{$set:body},{new:true})
      .then((todo)=>{
        if(todo){
          res.send({todo})
        }
      }, (e)=>{
        res.status(400).send(e)
    
      })
        
    }
  })

  // api route for deleting by an id

  app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
      console.log('chai')
      return res.status(404).send()
    }else{
      console.log('ewow')
      Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
          console.log('oya')
        return  res.status(404).send()
        }
        console.log('ok na')
        return res.send(todo)
      })
    }

  },(e)=>{
    res.status(404).send()
  })

app.listen(port,()=>{
  console.log(`server is up on port ${port}`)
})


module.exports = {app}
