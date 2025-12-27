const {databaseconnection} =require ('./db_connect/databaseconnection');
databaseconnection();
const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("running at 3000 port");
})