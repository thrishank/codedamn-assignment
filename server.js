const express = require('express');
const {Task} = require('./db');
const app = express();


// middlewars for parsing and sharing data. feel free to ignore
app.use(express.json());
const cors = require('cors');
app.use(cors());


// POST Request




// GET Request




// PUT Request




// Delete Request




app.listen(1337, () => {"server is up and running"});
