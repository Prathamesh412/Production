import express, { Application, NextFunction, Request, Response } from 'express'
import path from 'path'
import router from './routes/apiRoutes'
import responseMessage from './constant/responseMessage'
import httpError from './utils/httpErrors'
import globalErrorHandler from './middleware/globalErrorHandler'

const app: Application = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '../', 'public')))

// Routes
app.use('/api/v1', router)

// 404 Handler
app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'))
    } catch (err) {
        httpError(next, err, req, 404)
    }
})

// Global Error Handler
app.use(globalErrorHandler)

export default app
