const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('build'));

app.listen(port, () => { console.log (`Listening on localhost: ${port}`)});