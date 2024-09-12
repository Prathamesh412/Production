import { NextFunction, Request, Response } from 'express'
import httpResponse from '../utils/httpResponse'
import responseMessage from '../constant/responseMessage'
import httpError from '../utils/httpErrors'

export default {
    self: (req: Request, res: Response, next: NextFunction) => {
        console.log(req)
        try {
            httpResponse(req, res, 200, responseMessage.SUCCESS)
        } catch (err) {
            httpError(next, err, req, 500)
        }
    }
}
