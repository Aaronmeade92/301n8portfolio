'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){

  console.log('This port is ' + PORT);
})

app.use(express.static('./views'));
