const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, deleteFortune, addFortune, changeFortune, getLuckyNumber, getWatchList, getAllFortunes } = require('./controller')
// const { getFortune } = require('./controller')
// const { deleteFortune } = require('./controller')

// this is creating the endpoint

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/fortunes", getAllFortunes);
app.get("/api/luckyNumber", getLuckyNumber);
app.get("/api/watchList", getWatchList);
app.delete("/api/fortune/:id", deleteFortune);
app.post("/api/fortune", addFortune);
app.put("/api/fortune", changeFortune);



app.listen(4000, () => console.log("Server running on 4000"));