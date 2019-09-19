var express = require('express');
var rout = express.Router();
var User = require('../models/UserMongo');
var Comment = require('../models/Comment');
var Items = require('../models/Items');

rout.post('/items', (req, res) => {

    var items = req.body.item;
    var item = new Items({
        items: items
    });

    item.save().then(() => {
        console.log('add new item');
        Items.find().then((items) => {
            res.send(items);
        })
    })
})


rout.get('/All', (req, res) => {
    Items.find().then((user) => {
        res.send(user);
    })
})

rout.post('/delete', (req, res) => {
    Items.remove({ items: req.body.item }).then(() => {
        Items.find().then((items) => {
            res.send(items);
        })  
    })
})

rout.post('/login', (req, res) => {
    User.find({ login: req.body.login, password: req.body.password }).then((user) => {
        if (user != 0) {

            res.send(user[0]._id);
        }
    })
})

rout.post('/add', (req, res) => {

    var text = req.body.text;
    var user = req.body.user;
    var team = req.body.team;

    User.find({ _id: user }).then((user) => {
        var comment = new Comment({
            text: text,
            img: user[0].img,
            team: team
        });

        comment.save().then((user) => {

            Comment.find({ team: team }).then((items) => {
                res.send(items);
            })
        })
    })
})

rout.post('/gets', (req, res) => {
    Comment.find({ team: req.body.team }).then((comment) => {
        if (comment != 0) {
            res.send(comment);
        } else {
            res.send(null);
        }
    })
})

rout.post('/del', (req, res) => {
    Comment.remove({ team: req.body.team, text: req.body.text }).then((comment) => {
        Comment.find({ team: req.body.team }).then((user) => {
            res.send(user);
        })
    })

})


module.exports = rout;