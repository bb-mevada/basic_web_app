const winston = require('winston');
const path = require("path");
const dateAndTime = require("./dateTime");

const loggers = {
    infoLogger: winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [
            new winston.transports.File({
                level: 'info',
                filename: path.join(__dirname, "../", "logs", "info.log"),
                format: winston.format.combine(winston.format.timestamp({ format: dateAndTime.loggerDateTime }), winston.format.json())
            }),
            new winston.transports.Console({
                level: 'info',
                format: winston.format.combine(winston.format.timestamp({ format: dateAndTime.loggerDateTime }), winston.format.json())
            })
        ],
        exitOnError: false
    }),

    errorLogger: winston.createLogger({
        level: 'error',
        format: winston.format.json(),
        transports: [
            new winston.transports.File({
                level: 'error',
                filename: path.join(__dirname, "../", "logs", "error.log"),
                format: winston.format.combine(winston.format.timestamp({ format: dateAndTime.loggerDateTime }), winston.format.json())
            }),
            new winston.transports.Console({
                level: 'error',
                format: winston.format.combine(winston.format.timestamp({ format: dateAndTime.loggerDateTime }), winston.format.json())
            })
        ],
        exitOnError: false
    })
};

module.exports = loggers;