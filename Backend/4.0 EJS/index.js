import express from "express";

const app = express();
const port = 3000;


app.get("/", (req,res)=>{
    const today = new Date();
    var day = today.getDay() ;
    let type = "a weekday";
    let avc = ",so work hard"

    if(day === 0 || day === 6){
        type = "the weekend";
        avc = ",lets have fun!";
    }
     res.render("index.ejs", { 
        dayType:type,
        advice : avc,
     });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});