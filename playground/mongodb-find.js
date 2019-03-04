

// const MongoClient = require('mongodb').MongoClient

var {MongoClient,ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'TodoApp'

MongoClient.connect(url,{useNewUrlParser: true},(err,client)=>{
    if(err){
        return console.log('Unable to connect to the server')
    }else{
        console.log('Connected to the server')

        // client.db(dbName).collection('Todos').find(
        //     {_id: new ObjectID("5c7bf3083792c04f8ce72052")} //making an instance of objectid so to grab the id the document
        //     )
        //     .toArray().then((docs)=>{
        //     console.log(JSON.stringify(docs,undefined,2))
            // client.db(dbName).collection('Todos').find().count().then((count)=>{
            // console.log(`Todos count: ${count}`)

            client.db(dbName).collection('Users').find({name:'ifeanyi'}).toArray().then((result)=>{
                console.log(JSON.stringify(result,undefined,2))
            },(err)=>{
                console.log('could not find the document:', err)
            })

        // },(err)=>{

        //     return console.log('Unable to fetch data',err)

        // })
    
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