const express = require('express');

const app = express();
const SERVER_PORT =  process.env.PORT || 2020;

const router = require("./routes");

app.use(router);

app.listen(SERVER_PORT, () => {
    console.log('Server running on port: ', SERVER_PORT)
})