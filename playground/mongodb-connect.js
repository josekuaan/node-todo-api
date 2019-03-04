// const MongoClient = require('mongodb').MongoClient

const {MongoClient,ObjectID} = require('mongodb')

var obj = new ObjectID()
console.log(obj)
const test = require('assert');

//Database name
const dbName = 'TodoApp'
//Connection url 
url = 'mongodb://localhost:27017/TodoApp';
// Connect using MongoClient
MongoClient.connect(url,{ useNewUrlParser: true }, (err,client)=>{

   if(err){
       return console.log('Unable to connect to Mongodb server')
   }else{

   console.log('Connected to Mongodb server')
//    var db = client.db(dbName).collection('Todos');

//    db.insertOne({
//     read:'novel',
//     completed:false
//    },(err,result)=>{
    // test.equal(null, err);
    // Show that duplicate records got dropped
    // db.aggregation({}, {cursor: {}}).toArray(function(err, items) {
    //     test.equal(null, err);
    //     test.equal(4, items.length);
    //    if(err){
    //        return console.log('Could not insert data in to the db', err)
    //    }
    //     console.log(JSON.stringify(result.ops,undefined,2))
    //  

    // var db = client.db(dbName).collection('Users');
     
    // db.insertOne({
    //     name:'ifeanyi',
    //     age:8,
    //     location:'Magodo Lagos'
    // },(err,result)=>{
    //     if(err){
    //        return  console.log('Unable to insert into the db')
    //     }else{
    //      console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2))
    //     }
    //     client.close();
    // })
}
})

