require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require('mongoose')
const path = require("path")
const ejs = require("ejs")
const expressLayout = require("express-ejs-layouts")
const session = require("express-session")
const flash = require("express-flash")
const MongoDbStore = require("connect-mongo")
const PORT = process.env.PORT || 2000



// database connection
const databse = async () => {
    try {
        const url = process.env.URL
        const connection = await mongoose.connect(url)
        console.log("Database connected...")

    } catch (error) {
        console.log("Connection failed..")
    }
}
databse()

// store session mongodb
const mongoStore = new MongoDbStore({
    mongoUrl: process.env.URL,
    collectionName: "sessions"
})


// Session
app.use(session({
    secret: process.env.COOKIE_SECRET,
    store: mongoStore,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hours
}))



// flash
app.use(flash())
app.use(express.json())
// golobal middleware
app.use((req, res, next) => {
    res.locals.session = req.session;
    next()
})


// set Tempate engine 
app.use(expressLayout)
app.set("views", path.join(__dirname, "/resources/views/"))
app.set("view engine", "ejs")

// assets
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