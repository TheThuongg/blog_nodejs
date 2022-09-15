    const express = require('express');
    const path = require('path');
    const morgan = require('morgan');
    const methodOverride = require('method-override');
    const handlebars = require('express-handlebars').engine;
    const app = express();
    //const PORT = process.env.PORT || 3000;
    const port = 3000;
    const route = require('./routes');
    const db = require('./config/db');
    const SortMiddleware = require('./app/middleware/SortMiddleware');



    
    
    // Connect db
    db.connect();
    // override with POST having ?_method=PUT
    app.use(methodOverride('_method'));
    // Custom middleware for routes 
    app.use(SortMiddleware);  
    // HTTP Logger
    // app.use(morgan('combined'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public'))); // static file


    // Templates engine 
    app.engine('hbs', handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b)  => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending'
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                }
                const icon = icons[sortType];
                const type = types[sortType];
                return ` <a href="?_sort&column=${field}&type=${type}">
                <span class="${icon}"></span>
              </a>`
            }
        },

    })); //tao handlebars engine
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'resources', 'views'));

    //  Route init
    route(app);

    app.listen(port, () =>
        console.log(`App listening at http://localhost:${port}`),
    );
