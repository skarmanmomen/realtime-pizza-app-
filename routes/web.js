const homeController = require("../app/http/controllers/homeController.js")
const cartController = require("../app/http/controllers/customer/cartController.js")
const authController = require("../app/http/controllers/authController.js")

// Its my way 1
const initRoutes = (app) => {

    app.get("/", homeController().index)
    app.get("/cart", cartController().cart)
    app.get("/login", authController().login)
    app.get("/register", authController().register)

    app.post("/add-cart", cartController().update)


}

module.exports = initRoutes



// you have a confused then you can do it
// const routes = require("express").Router()

// //example
// route.get("/", (req, res) => {
//     res.render("home")
// })

// module.exports = routes
