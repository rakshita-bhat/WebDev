import express from "express";
import axios from "axios";

const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/", async (req,res)=>{
    try{
        const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const drink = result.data.drinks[0];

        const ingredients = Object.keys(drink)
        .filter(key => key.startsWith("strIngredient") && drink[key])
        .map(key => drink[key]);

        res.render("index.ejs",{
            name : drink.strDrink,
            alcohol: drink.strAlcoholic,
            ingredients :ingredients,
            instructions: drink.strInstructions,
        });
        
    }catch(error){
        console.error("Error fetching cocktail:", error.message);
        res.status(500);
    }
});


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});