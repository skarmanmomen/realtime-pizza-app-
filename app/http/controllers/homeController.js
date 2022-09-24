const Menu = require("../../models/Menu")



const homeController = () => {
  return {
    async index(req, res) {
      const pizzas = await Menu.find()
   
    return   res.render("home.ejs", { pizzas })
    }
  }
}

module.exports = homeController