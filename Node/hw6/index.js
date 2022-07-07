//const fs = require('fs');
const express = require('express');
const handlers = require('./handlers.js');

const app = express();
app.use(express.json())
app.get("/", (req,res) => {
    res.send("/home")
});
app.post("/", async (req,res) => {
    try {
        await handlers.fileWrite(JSON.stringify(req.body),"./text.txt");
        console.log('file written!')
        res.send("File created! with object:"+' '+JSON.stringify(req.body))
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})


app.listen(8080);