const express = require('express');
const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');
const path = require('path');
const fs = require('fs')
const app = express();
const db = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));