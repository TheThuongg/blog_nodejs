const express = require('express');

const path = require('path');
const morgan = require('morgan');



const  handlebars  = require("express-handlebars");
const hbs = handlebars.create({ extname: '.hbs' })
const app = express();
//const PORT = process.env.PORT || 3000;
const port = 3000


const route = require('./routes');
// HTTP Logger
// app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // static file 

// Templates engine
app.engine("hbs", hbs.engine);//tao handlebars engine
app.set("view engine", "hbs"); 
app.set('views', path.join(__dirname, '/resources/views'));


//  Route init
route(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));