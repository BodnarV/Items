var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());

var user = require('./routes/userRoute');


app.use(bodyParser.json());
bodyParser.urlencoded({ extended: true });

app.use('/user',user);


app.get('/',(req,res) =>{
res.send('Hello from server');
});


app.listen(4000,()=>{
console.log('Server runnig');
});