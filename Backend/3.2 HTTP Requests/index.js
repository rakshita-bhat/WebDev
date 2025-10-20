import express from "express";

// to return the html files as response follow below code

// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// app.use(express.static(__dirname));

// app.get("/",(req,res) =>{
//     res.sendFile(path.join(__dirname, 'home.html'));  
// });

// app.get("/about",(req,res) =>{
//     res.sendFile(path.join(__dirname, 'about.html'));
// });

// app.get("/contact",(req,res) =>{
//     res.sendFile(path.join(__dirname, 'contact.html'));
// });


const app = express();
 
app.get("/",(req,res) =>{
    res.send("This is Home Page");
});

app.get("/about",(req,res) =>{
    res.send("This is AboutUs Page");
});

app.get("/contact",(req,res) =>{
    res.send("This is ContactUs Page");
});

const port = 3000;
app.listen(port,() =>{
    console.log(`Server is running on ${port}`);
});