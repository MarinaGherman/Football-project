module.exports = (req, res, next) => {
    if (!req.query.s) {
        return res.status(400).json({
            message: "Not found string!"
        });
    }
    req.query.s = req.query.s.toUpperCase();
    next();
}