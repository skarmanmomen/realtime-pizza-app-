const express = require("express")
const app = express()
const path = require("path")
const ejs = require("ejs")
const expressLayout = require("express-ejs-layouts")
const PORT = process.env.PORT || 2000



app.get("/", (req, res) => {
    res.render("home")
})

// set Tempate engine 
app.use(expressLayout)
app.set("views", path.join(__dirname, "/resources/views/"))
app.set("view engine", "ejs")

// listening on port 
app.listen(PORT, (err) => {
    if (err) {
        console.log("server error ", err)
    }
    console.log(`Listening on port ${PORT}`)
})