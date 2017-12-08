//all the config for the server
const express = require('express');
const hbs = require('express-handlebars');

const app = express();

//now we need to set a template engine for handle-bars
app.engine('hbs', hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

//MIDDLEWARES //Get all the stuff we need before the rest loads
app.use('/css', express.static(__dirname + '/public/css'));

app.use('/', (req, res, next)=>{
    console.log('someone made a request from: ' + req.url);
    res.cookie("cookieName", "cookieValue");
    next(); //basically say move forward in the application
});

//ROUTES
app.get('/', (req, res)=>{
    res.send(`
        <html>
        <head>
            <link type="text/css" rel="stylesheet" href="/css/style.css"
        </head>
            <body>
                <h1>Welcome, buddy</h1>
            </body>
        </html>   
    `);
});


app.get('/api/user', (req,res)=>{
    res.send({
        name:"Jeremy",
        lastname: "lincoln"
    })
});

//PARAMS
//http://expressjs.com/en/guide/routing.html


app.get('/api/:user/:id', (req, res)=>{
    let id = req.params.id;
    let user = req.params.user;
    res.send(`
        <html>
            <body>
                <p>The id is ${id} and username is ${user}</p>
            </body>
        </html>
    `)
});

//query string - not built in express
// /cars?brand=ford&year=2017

//but we still can for now
app.get("/api/car", (req, res)=>{
    let brand = req.query.brand;
    let year = req.query.year;

    res.send({
        brand,
        year
    })

});

app.get('/user', (req, res) => {

    res.render('user', {
        name: 'Jeremy',
        lastname: 'Lincoln'
    });
});

//SERVER
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log('Server Running')
});