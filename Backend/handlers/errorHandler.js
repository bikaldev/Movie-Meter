const errorHandler = (req, res, next) => {
    res.status(404).json({message: "This api endpoint doesn'exist"});
}

module.exports = errorHandler;