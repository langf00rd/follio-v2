const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

const connectToMongoDB = async function () {

    try {
        console.log('connecting to DB...')
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database connected')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectToMongoDB