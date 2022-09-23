const express = require("express")
const app = express()
const path = require("path")
const ejs = require("ejs")
const expressLayout = require("express-ejs-layouts")
const databse = require("./app/database")
const PORT = process.env.PORT || 2000



// database connection
databse() 
 



// set Tempate engine 
app.use(expressLayout)
app.set("views", path.join(__dirname, "/resources/views/"))
app.set("view engine", "ejs")

// public folder 
app.use(express.static("public"))




//  invok initRoutes way 2
require("./routes/web")(app)

// route import way 1
// const route =  require("./routes/routes")
// app.use(route)


app.get("*", (req, res) => {
    res.render("error")
})







// listening on port 
app.listen(PORT, (err) => {
    if (err) {
        console.log("server error ", err)
    }
    console.log(`Listening on port ${PORT}`)
})