
var User = require('./models/UserMongo');
var Comment = require('./models/Comment');
var Items = require('./models/Items');
var chat = require('./models/chat');
module.exports = (io) => {

    io.on('connection', (socket) => {

        socket.join('all');
        socket.on('new-message', (message) => {
            User.find({ _id: message.id }).lean().then((user) => {
                var comment = new Comment({
                    text: message.text,
                    img: user[0].img,
                    team: message.team
                });

                comment.save().then(() => {

                    Comment.find({ team: message.team }).lean().then((items) => {
                        
                        socket.emit('add-message', { items: items })
                        socket.to('all').emit('add-message', { items: items })
                    })
                });
            })
        })
    })
}