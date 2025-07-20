const express = require("express");
const fs =require("fs");
const app = express();
const port =4000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(${__dirname}))
app.listen(port,()=>{
    console.log(server started http://localhost:${port})
        })
app.get("/", (req, res) => {
    res.sendFile("index.html")
})
app.post("/",(req,res)=>{
    const Name =req.body.name;
    const Email =req.body.email;
    const subject =req.body.subject;
    const message =req.body.message;
    
    fs.appendFile("file.txt",`Name :${Name}  
     email:${Email}
     subject:${subject}
    message:${message}
    
    
    `

    ,"utf-8",
    (err)=>{
        console.log(err)
    });
    
})