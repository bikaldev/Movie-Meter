const jwt = require('jsonwebtoken')

const isAuth = (req,res,next) => {
    const token = req.getHeader('Authorization');
    result = jwt.verify(token, process.env['API-KEY']);
    if(!result){
        let error = new Error('The given token is invalid!');
        error.httpStatusCode = 401;
        return next(error);
    }

    req.email = result.email;
    req.isAuthorized = true;
    next();
}

module.exports = isAuth