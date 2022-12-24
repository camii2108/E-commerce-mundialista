const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req,res)=> {
    console.log(req.query.user)
    let saludo = "<h1> Hola mundo </h1>"
    return res.send(saludo)
})
app.get("/404", (req, res)=>{
    return res.send("Error página no encontra")
})

app.get("/home", (req, res) => {
    return res.sendFile(path.join(__dirname, "/home.html"))
})
app.listen(3030, ()=>console.log("El servidor esta escuchando en el puerto 3030"))