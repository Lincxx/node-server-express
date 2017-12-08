//all the config for the server
const express = require('express');

const app = express();

//ROUTES
app.get('/', (req, res)=>{
    res.send('Welcome');
});


//SERVER
app.listen(3000, ()=>{
    console.log('Server Running')
})