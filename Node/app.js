let express = require('express')
let app = express();


var bodyParser = require('body-parser');
var cors = require('cors');
var user = require('./routes/userRoute');



app.use(bodyParser.json());
bodyParser.urlencoded({ extended: true });

app.use(cors());
app.use('/user',user);



app.get('/all', async (req, res) => {
    

})

app.listen(3000, () => {
    console.log(`started on port: 3000`);
});

