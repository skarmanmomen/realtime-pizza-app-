const express = require("express")
const app = express()
const path = require("path")
const ejs = require("ejs")
const expressLayout = require("express-ejs-layouts")
const PORT = process.env.PORT || 2000



// set Tempate engine 
app.use(expressLayout)
app.set("views", path.join(__dirname, "/resources/views/"))
app.set("view engine", "ejs")

// public folder 
app.use(express.static("public"))


app.get("/", (req, res) => {
    res.render("home")
})

app.get("/cart", (req, res) => {
    res.render("customers/cart")
})
app.get("/login", (req, res) => {
    res.render("auth/login")
})
app.get("/register", (req, res) => {
    res.render("auth/register")
})





 
 

// listening on port 
app.listen(PORT, (err) => {
    if (err) {
        console.log("server error ", err)
    }
    console.log(`Listening on port ${PORT}`)
})