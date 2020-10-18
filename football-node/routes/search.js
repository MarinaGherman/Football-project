const express = require('express');
const searchRouter = express.Router();

const database = ["Anna", "Marina", "Andrei", "Ion"];

searchRouter.get('/', (req, res) => {

    const {s} = req.query;
    let response = [];

    response = database.filter(name => name.toUpperCase().includes(s));

    res.status(200).json({
        response
    });

})

module.exports = searchRouter;