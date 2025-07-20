// const express = require("express");
// const fs =require("fs");
// const app = express();
// const port =4000;

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static(${__dirname}))
// app.listen(port,()=>{
//     console.log(server started http://localhost:${port})})
// app.get("/", (req, res) => {
//     res.sendFile("index.html")
// })
// app.post("/",(req,res)=>{
//     const Name =req.body.name;
//     const Email =req.body.email;
//     const subject =req.body.subject;
//     const message =req.body.message;
    
//     fs.appendFile("file.txt",`Name :${Name}  
//      email:${Email}
//      subject:${subject}
//     message:${message}`,"utf-8",(err)=>{console.log(err)
//     });
    
// })


const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// GET route to serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// POST route to handle form data
app.post("/", (req, res) => {
    const { name, email, subject, message } = req.body;

    const data = `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
--------------------------\n`;

    fs.appendFile("file.txt", data, "utf-8", (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            res.status(500).send("Internal Server Error");
        } else {
            console.log("Data saved to file.txt");
            res.send("Form submitted successfully!");
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
