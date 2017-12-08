//all the config for the server
const express = require('express');

const app = express();

//ROUTES
app.get('/', (req, res)=>{
    res.send(`
        <html>
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

;})

//SERVER
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log('Server Running')
});