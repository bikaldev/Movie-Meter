const BST = require('../algorithms/Searching');
// const url = require('url');
const data = require('../data/filmData.json');
// const path = require(path);

const searchReqHandler = (req,res,next) => {

    let urlParams = req.params;
    let searchBy = urlParams['searchBy'];
    let keyword = urlParams['keyword'];
    
    let binTree = new BST();
    let searchResult;
    let result = [];
    switch(searchBy) {
        case 'cast':
            binTree.loadFromFile('../data/binaryCastTree.json');
            searchResult = [binTree.search(keyword)];
            break;
        case 'title':
            binTree.loadFromFile('../data/binaryTitleTree.json');
            searchResult = [binTree.search(keyword)];
            break;
        case 'director':
            binTree.loadFromFile('../data/binaryDirectorTree.json');
            searchResult = [binTree.search(keyword)];
            break;
        default:
            let error = new Error('Incorrect parameter in the url');
            error.httpStatusCode = 422;
            return next(error);
    }
    for(let item of searchResult) {
        result.push(data[String(item.id)]);
    }

    let searchData = [];
    for(let item of searchResult) {
        searchData.push(data[String(item.id)]);
    }

    if(searchResult) {
        res.status(200).json({message: 'search result found!', data: searchData});
    } else {
        res.status(200).json({message: 'search result not found!', data: null});
    }
}

module.exports = searchReqHandler;