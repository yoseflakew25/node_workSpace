const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('./db/connect')

//middleware


app.use(express.json());




// routes

app.get('/hello', (req, res) => {
    res.send('task manager App');
})



app.use('/api/v1/tasks', tasks);




const port = 3000



app.listen(port, () => {
    console.log(`Example app listening on port ${port}...`)
})