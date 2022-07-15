const bcryptjs = require('bcryptjs')
const fs = require('fs');

const BST = require('../algorithms/Searching');

const signupHandler = (req, res, next)  => {
    let email = req.body.email;
    let password = req.body.password;
    
    let mailTree = new BST({});
    mailTree.loadFromFile('../data/mailTree.json');
    confirmation = mailTree.search(email);
    
    if(!confirmation) {
        let error = new Error("An account with this email already exists!");
        error.httpStatusCode = 422;
        return next(error);
    }

    const key = process.env['API-KEY'];
    let hashedEmail = bcryptjs.hash(email, key);
    let hashedPassword = bcryptjs.hash(password, key);
    
    userData = {hashedEmail: {password: hashedPassword}};

    try {
        const userDataFile = require('../data/userData.json');
        userDataFile[hashedEmail] = {password: hashedPassword};
        fs.writeFile('../data/userData.json',JSON.stringify(userDataFile),(err) => {
            console.log(err);
        })
    } catch {
        fs.writeFile('../data/userData.json',JSON.stringify(userData), (err) => {
            console.log(err);
        });
    }

    mailTree.add({data: email, id: hashedEmail});
    res.status(201).json({message: 'Account Created Successfully'});
    next();
}

module.exports = signupHandler