const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');
// const favicon = require('express-favicon');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const expressValidator = require('express-validator');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const flash = require('connect-flash');
// const passport = require('passport');
// const moment = require('moment');

const products = require('./routes/products');
// const services = require('./routes/services');
// const users = require('./routes/users');
//
const path = require('path');
const publicPath = path.join(__dirname, 'public');
// const config = require('./config/database');
const app = express();

const PORT = process.env.PORT || 3000;

// let gfs;
//
// mongoose.connect(config.database, {
//     useNewUrlParser: true
// });
//
// const conn = mongoose.connection;
//
// conn.once('open', () => {
//     console.log('Database Connection Established Successfully.');
// });
//
// conn.on('error', (err) => {
//     console.log('Unable to Connect to Database. ' + err);
// });

// app.use(favicon(publicPath + '/img/favicon.png'));
app.use(express.static(publicPath));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: 'views/partials'
}));
app.set('view engine', '.hbs');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser('keybaord cat'));
// app.use(session({
//     secret: 'keyboard cat',
//     resave: true,
//     saveUninitialized: true
// }));
// app.use(flash());
// app.use((req, res, next) => {
//     res.locals.messages = require('express-messages')(req, res);
//     next();
// });
// app.use(expressValidator({
//     errorFormatter: (param, msg, value) => {
//         let namespace = param.split('.')
//         , root = namespace.shift()
//         , formParam = root;
//
//         while (namespace.length) {
//             formParam += '[' + namespace.shift() + ']';
//         }
//         return{
//             param: formParam,
//             msg: msg,
//             value: value
//         };
//     }
// }));
//
// require('./config/passport')(passport);
//
// app.use(passport.initialize());
// app.use(passport.session());
// app.use((req, res, next) => {
//     res.locals.success_message = req.flash('success');
//     res.locals.failure_message = req.flash('failure');
//     next();
// });
//
app.use('/products', products);
// app.use('/services', services);
// app.use('/users', users);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Vegistech - Home',
        style: 'index.css',
        script: 'index.js'
    });
});

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}...`);
});
