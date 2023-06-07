const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home');
});

const router = require('./routes/routeUserPosts');

app.use(router);

let port = process.env.PORT || 8080;
// if (port == null || port == "") {
//     let port = 8080;
// }

app.listen(port);



