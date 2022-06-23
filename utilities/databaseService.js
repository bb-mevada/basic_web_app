const mongoose = require("mongoose")
const { MONGO_URL } = require("../config/config")
const loggers = require("./logger")

module.exports = {
    connector: async() => {
        try {
            await mongoose.connect(MONGO_URL,{
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

            loggers.infoLogger.info(`Success --> Database connected successfully...`)
        }
        catch (err) {
            throw err
        }
    }
}