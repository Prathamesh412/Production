import app from './app'
import config from './config/config'

 
const server = app.listen(config.PORT)

;(() => {
    try {
        // Database Connection
        // const connection = await databaseService.connect()
        // logger.info(`DATABASE_CONNECTION`, {
        //     meta: {
        //         CONNECTION_NAME: connection.name
        //     }
        // })

        // initRateLimiter(connection)
        // logger.info(`RATE_LIMITER_INITIATED`)

        console.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        })
    } catch (err) {
        console.error(`APPLICATION_ERROR`, { meta: err })

        server.close((error) => {
            if (error) {
                console.error(`APPLICATION_ERROR`, { meta: error })
            }

            process.exit(1)
        })
    }
})()
