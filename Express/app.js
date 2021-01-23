const express = require("express");
const app = express();
const port = 80;
app.get("/",(req,res) => {
    res.send("Hii I am working!!")
});

app.listen(port, () => {
    console.log(`The app is working at port ${port}`)
})
