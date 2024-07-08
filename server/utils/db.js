const mongoose = require('mongoose')

const URI = process.env.MONOGDBURI

const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Successfully connected to the database")
    } catch (err) {
        console.log("Error while connecting to the database: ", err)
    }
}

module.exports = connectDB