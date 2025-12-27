const {databaseconnection} =require ('./db_connect/databaseconnection');
databaseconnection();
const express=require('express');

const Book = require('./model/Book');

const app=express();
app.use(express.json());

app.listen(3000,()=>{
    console.log("running at 3000 port");
})

app.post("/createbook",async(req,res)=>{
    const {title,author,description,isAvailable,createdAt}=req.body;
    console.log(title,author,description,isAvailable,createdAt)
    if(!title||!author||!isAvailable||!createdAt){
        return res.status(400).json({
            message:"enter all required fields"
        });
    }

    const response=await Book.create({
        title:title,
        author:author,
        description:description,
        isAvailable:isAvailable,
        createdAt:createdAt
    });

    res.status(200).json({
        message:"book crested successfully",
        data:req.body
    })
})




