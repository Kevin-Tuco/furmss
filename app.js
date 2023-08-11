const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
// const exphbs = require('express-handlebars');
const hbs = require('hbs');
const cors = require('cors')

const connect = require('./models/db.js');
const User = require('./models/User.js');
const Forum1 = require('./models/Forum1.js');
const Forum2 = require('./models/Forum2.js');
const Forum3 = require('./models/Forum3.js');
const router = require('./routes/router.js');
const register = require('./routes/register.js');
const login = require('./routes/login.js');
const changePage = require('./routes/changePage.js');
const forum1_create = require('./routes/forum1_create.js');
const forum2_create = require('./routes/forum2_create.js');
const forum3_create = require('./routes/forum3_create.js');

const app = express();

app.use(cors());

app.use(cookieParser());

app.use(session({
    secret: 'mco3',
    cookie: { maxAge: 30000},
    resave: true,
    saveUninitialized: false
}));

app.use('/static', express.static('public'));

// app.engine("hbs", hbs.engine({
//     extname: "hbs", 
//     helpers: {
//         formatDate: function(date) {
//             return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
//         }
//     }
// }));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');
app.set("views", "./views");

// Parse request body as json
app.use(express.json());
// Apply routes to express app
app.use(router);

// Apply register to express app
app.use("/register", register);

// Apply login to express app
app.use(login);

// Apply changePage to express app
app.use("/changePage", changePage);

// Apply forum1_create to express app
app.use(forum1_create);

// Apply forum2_create to express app
app.use(forum2_create);

// Apply forum3_create to express app
app.use(forum3_create);

app.listen(process.env.SERVER_PORT, async function() {
    console.log(`express app is now listening on port ${process.env.SERVER_PORT}`);
    try {
        await connect();
        console.log(`Now connected to MongoDB`);

    } catch (err) {
        console.log('Connection to MongoDB failed: ');
        console.error(err);
    }
});

