var express = require('express');
var rout = express.Router();
var User = require('../models/UserMongo');
var Comment = require('../models/Comment');
var Items = require('../models/Items');
var ItemController = require('../controllers/items');
ItemController = new ItemController();

rout.post('/items', (req, res) => {

    var items = req.body.item;
    ItemController.addItem(items).then((result)=>{
        res.send(result)
    })
})


rout.get('/All', (req, res) => {
    ItemController.all().then((result) => {
        res.send(result);
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
    var login = req.body.login, password;
    var password = req.body.password;

   ItemController.login(login,password).then((result)=>{
       res.send(result);
   })
})

rout.post('/add', (req, res) => {

    var text = req.body.text;
    var user = req.body.user;
    var team = req.body.team;

    ItemController.add(text,user,team).then((result)=>{
        res.send(result);
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

    ItemController.del(req.body.team, req.body.text).then((result) => {
        res.send(result);
    })
})


module.exports = rout;
