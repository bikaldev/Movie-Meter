const BST = require('../algorithms/Searching');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const loginHandler = (req, res, next)  => {
    let email = req.body.email;
    let password = req.body.password;

    let mailTree = new BST({});
    mailTree.loadFromFile('../data/mailTree.json');
    result = mailTree.search(email);
    if(!result) {
        let error = new Error('The email entered doesn\'t have an account!');
        error.httpStatusCode = 422;
        return next(error);
    }

    const userData = require('../data/userData.json');
    currentUser = userData[result.id];
    bcryptjs.compare(password, currentUser.password).then(
        confimation => {
            if(!confimation) {
                let error = new Error('Incorrect Password');
                error.httpStatusCode = 401;
                return next(error);
            }
            const key = process.env['API-KEY'];
        const token = jwt.sign({email: result.data },key, {expiresIn: '2h'});
        res.status(200).json({message: 'Login Successful', token: token});
        next();
        }
    )
}

module.exports = loginHandler