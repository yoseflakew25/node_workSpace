require('dotenv').config()


// async errors





const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


// middleware

app.use(express.json());



//rootes


app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products"></a>');
});


// products route

app.use(notFoundMiddleware)


app.use(errorHandlerMiddleware)


const port = process.env.PORT || 3000;


const start = async() => {
    try {
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}



start()