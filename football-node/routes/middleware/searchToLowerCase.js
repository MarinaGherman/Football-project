module.exports = (req, res, next) => {

    if (!req.query.s) {
        return res.status(400).json({
            message: "Bad request, missing s query parameter"
        });
    }

    req.query.s = req.query.s.toLowerCase();

    next();

}