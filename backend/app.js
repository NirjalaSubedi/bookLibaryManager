const {databaseconnection} =require ('./db_connect/databaseconnection');
databaseconnection();
const express=require('express');

const Book = require('./model/Book');

const app=express();
app.use(express.json());

app.listen(3000,()=>{
    console.log("running at 3000 port");
})

app.post("/createbook", async (req, res) => {
    try {
        const { title, author, description, isAvailable, createdAt } = req.body || {};
        
        if (!title || !author) {
            return res.status(400).json({ message: "Title and Author are required" });
        }

        const response = await Book.create({
            title,
            author,
            description,
            isAvailable,
            createdAt
        });

        res.status(200).json({
            message: "book created successfully",
            data: response
        });

    } catch (error) {
        console.log("Database Error:", error.message);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});

app.get("/getbooks",async(req,res)=>{
    const books=await Book.find()
    if(books.lemgth==0){
        return res.status(404).json({
            message:"No Books found"
        })
    }
    return res.status(200).json({
        message:"Books retruived success",
        data:books
    })
})


app.get("/getsinglebook/:id",async(req,res)=>{
    const {id}=req.params;
    const book=await Book.findById(id);
    if(!book){
      return res.status(404).json({
        message:"Book not found"
      })
    }
    return res.status(200).json({
        message:"Book found successfully",
        data:book
      })
})
