
const errorHandlingFunction = (error, req, res, next) => {
    if(error.httpStatusCode === undefined) {
        next();
    } else {
        res.status(error.httpStatusCode).json({message: error.message});
    }
}

module.exports = errorHandlingFunction
