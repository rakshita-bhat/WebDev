import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";




const yourUsername = "rakshitabhat";
const yourPassword = "rakshita";
const yourAPIKey = "763e55d3-a134-447e-891d-76ad5b98bdf5";
const yourBearerToken = "391186ad-2e1e-4f7b-9112-a34a89920e41";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try{
    const result = await axios.get(API_URL +"/random");
    console.log(result);
    res.render("index.ejs", {content : JSON.stringify(result.data)} );
  }catch(error){
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try{
    const result = await axios.get(API_URL +"/all?page=2", {
      auth : {
        username: yourUsername,
        password : yourPassword,
      },
    });
    res.render("index.ejs", {content : JSON.stringify(result.data)});
  }
  catch(error){
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try{
    const result = await axios.get(API_URL +"/filter", {
      params: {
        score : 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  }catch(error){
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try{
    const result = await axios.get(API_URL + "/secrets/42", {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      },
    });
    res.render("index.ejs",{content: JSON.stringify(result.data)});
  }catch(error){
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
