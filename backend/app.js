const {databaseconnection} =require ('./db_connect/databaseconnection');
databaseconnection();
const express=require('express');

const Book = require('./model/Book');

const app=express();
app.use(express.json());

app.listen(3000,()=>{
    console.log("running at 3000 port");
})



