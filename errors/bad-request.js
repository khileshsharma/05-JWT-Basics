const  CustomAPIError  = require('./custom-error')
const { StatusCodes } = require('http-status-codes')

class badRequest extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST   //BAD_REQUEST is statuscode=400  https://www.npmjs.com/package/http-status-codes
    }
}

module.exports = badRequest