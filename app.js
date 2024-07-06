const express = require('express')
const app = express()
const port = 3000
const homeRoutes = require('./routes/home/routes')
const path = require('path');

// config
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views/pages'));

// general middlewares


// home routes
app.use('/', homeRoutes);


// listen
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))