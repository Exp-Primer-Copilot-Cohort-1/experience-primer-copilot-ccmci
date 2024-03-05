//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create a middleware
app.use(express.json());

//Create a router
const commentsRouter = require('./commentsRouter');
app.use('/comments', commentsRouter);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
