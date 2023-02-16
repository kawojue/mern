const origins = require('./origins')

const corsOptions = {
    origin: (origin, callback) => {
        if (origins.indexOf(origin) !== -1 | origin) {
            callback(null, true)
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
}

module.exports = corsOptions