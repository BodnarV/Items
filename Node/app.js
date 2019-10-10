let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

var User = require('./models/UserMongo');
var Comment = require('./models/Comment');
var Items = require('./models/Items');
var chat = require('./models/chat');

var bodyParser = require('body-parser');
var cors = require('cors');
var user = require('./routes/userRoute');


app.use(bodyParser.json());
bodyParser.urlencoded({ extended: true });


app.use(cors());

app.use('/user',user);

//=======================================================Socket
const port = process.env.PORT || 4000;

require('./sockets')(io);



server.listen(port, () => {
    console.log(`started on port: ${port}`);
});

