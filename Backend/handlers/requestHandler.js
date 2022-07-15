const sortData = require('../algorithms/sortData');

//the url must contain sortBy (if missing will throw an error), the data will always be sent in ascending order
//the url must contain genreList and genreLogic (if missing will sort all the data)
//the url must contain startYear and endYear (if missing will sort all the data)
//the url must contain startRating and endRating (if missing will sort all the data)
//the url can also include searchBy and searchKeyword (optional)
//the url must also contain page no.

const ITEMS_PER_PAGE = 10;

const reqHandler = (req, res, next) => {

    // console.log('/getMovieDetail/sortBy..');
    console.log(req.url);

    let urlData = req.query;
    if(urlData === null) {
        let error = new Error('Insufficient query in the url!');
        error.httpStatusCode = 422;
        return next(error);
        
    }
    
    if(urlData.sortBy === undefined || urlData.page === undefined) {
        let error = new Error('Insufficient query in the url!');
        error.httpStatusCode = 422;
        return next(error);
    }

    let sortOrder = urlData.sortOrder || 'desc';
    let allFlag;
    if((urlData.genreList && urlData.genreLogic) || (urlData.startYear && urlData.endYear) || (urlData.startRating && urlData.endRating)) {
        allFlag = false;
    } else {
        allFlag = true;
    }
    let pageNo = Number(urlData.page);
    // console.log(urlData.sortBy, allFlag, urlData.genreList, urlData.genreLogic, urlData.startYear, urlData.endYear, urlData.startRating, urlData.endRating);
    let result = sortData(urlData.sortBy, allFlag, urlData.genreList, urlData.genreLogic, urlData.startYear, urlData.endYear, urlData.startRating, urlData.endRating);
    
    if(sortOrder === 'desc') {
        result = result.reverse();
    }
    result = result.slice((pageNo-1)*ITEMS_PER_PAGE,pageNo * ITEMS_PER_PAGE);
    res.setHeader('content-type','application/json');
    res.status(200).json({message: 'Data Retrieved successfully', result: result});
}

module.exports = reqHandler;