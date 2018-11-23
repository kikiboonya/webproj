const express = require('express');
const postsroutes = require('./routes/api/posts');
const posts = require('./routes/api/posts');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.use('/api/posts', posts);

app.listen('5000', () => {
    console.log('Server started on port 5000.');
});

