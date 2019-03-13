

// const MongoClient = require('mongodb').MongoClient

var {MongoClient,ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'TodoApp'

MongoClient.connect(url,{useNewUrlParser: true},(err,client)=>{
    if(err){
        return console.log('Unable to connect to the server')
    }else{
        console.log('Connected to the server')
        // client.db(dbName).collection('Users').deleteMany({name:'ifeanyi'}).then((result)=>{
        //     if(result){
        //         console.log('the data was sucessfully deleted')
        //         console.log(result)
        //     }


            client.db(dbNmae).collection('Users').deleteOne({age:'amos'}).then((res)=>{
                console.log(res);
            })

            // client.db(dbName).collection('Users').findOneAndDelete({_id:new ObjectID("5c7c018b2c8ce5267cfd18c4")}).then((res)=>{
            //     console.log(res);
            // })
          
        // (err)=>{
        //     console.log('Unable to delete the data', err)
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