const mongoose = require('mongoose')
const databse = async () => {
    try {
        const url = `mongodb+srv://arman:arman16--@cluster0.1io0a.mongodb.net/?retryWrites=true&w=majority`

        await mongoose.connect(url)
        
        console.log("Database connected...")


    } catch (error) {
        console.log("Connection failed..")
    }
}

module.exports = databse