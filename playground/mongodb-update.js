

// const MongoClient = require('mongodb').MongoClient

var {MongoClient,ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'TodoApp'

MongoClient.connect(url,{useNewUrlParser: true},(err,client)=>{
    if(err){
        return console.log('Unable to connect to the server')
    }else{
       
      console.log('connected to mogodb server')
    //   client.db(dbName).collection('Todos').findOneAndUpdate({_id: new ObjectID("5c7bf2ec4f6e341fa00ba4b4")},
    //   { $set:{completed:true}},
    //   {
    //       returnOriginal:false// returnOriginal is true by default which makes
    //       // it return what is originally in the db but we want it to return the result of the updated record so we set it to false
    //   }).then((result)=>{
    //     console.log(result)
    //   })

    client.db(dbName).collection('Users').findOneAndUpdate({_id: new ObjectID("5c7c01b6bb77421458a8be5c")},
     {$set:{name:'Ifeanyi'},
      $inc:{age:1}
    },
    {
        returnOriginal:false
    }).then((res)=>{
        console.log(res);
    })
    
        client.close();
        // db.find((err,result)=>{

        //     if(err){
        //         return console.log('Could not fetch data',err)
        //     }else{

        //         console.log('got here',JSON.stringify(result,undefined,2))
        //     }
        // })
    }

})