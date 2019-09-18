var express = require('express');
var rout = express.Router();
var User = require('../models/UserMongo');
var Comment = require('../models/Comment');
var Items = require('../models/Items');


const jwt = require('jsonwebtoken');
const Jwt_Secret = 'your_sercet_key';


rout.post('/items',(req, res)=>{

    var items = req.body.item;

    console.log(items);

    var item = new Items({
        items:items
    });


    item.save().then((user) => {

        console.log('add new item');

     Items.find().then((items)=>{
         res.send(items);
     })
    })
})
//==========================================================================

rout.get('/All', (req, res) => {
    
    Items.find().then((user) => {
        res.send(user);
    })
 })
//===========================================================================
rout.post('/delete', (req, res) => {
    Items.remove({items:req.body.item}).then(() => {

        Items.find().then((items) => {
            res.send(items);
        })
    })


})
//============================================================================

rout.post('/login', (req, res) => {


    User.find({ login: req.body.login, password: req.body.password }).then((user) => {
        if (user != 0) {

            res.send(user[0]._id);

        }

    })
})

//==============================================================================

rout.post('/add',(req, res)=>{

    var text = req.body.text;
    var user = req.body.user;
    var team = req.body.team;
   

    console.log(text);


    User.find({_id:user}).then((user)=>{
        var comment = new Comment({
            text:text,
            img:user[0].img,
            team:team
        });

        comment.save().then((user) => {

            Comment.find({team:team}).then((items)=>{
             res.send(items);
         })
      })
    })
    
  
})
 //==================================================

 rout.post('/gets', (req, res) => {
   
     
    Comment.find({team:req.body.team}).then((comment) => {
        if(comment != 0){
        res.send(comment);
        }
    })
 })
 //==================================================
  rout.post('/del',(req,res)=>{
    Comment.remove({team:req.body.team,text:req.body.text}).then((comment) => {
        Comment.find({team:req.body.team}).then((user)=>{
            res.send(user);
        })
    })

  })

// rout.post('/rename', (req, res) => {
//     var oldP = req.body.oldPass;
//     var oldL = req.body.oldLog;
//     var oldName = req.body.oldName;

//     var NewPass = req.body.NewPass;
//     var NewLog = req.body.NewLog;
//     var NewName = req.body.NewName;

//     // console.log(NewPass,)

//     User.updateOne({ login: oldL, password: oldP, name: oldName }, { login: NewLog, password: NewPass, name: NewName }).then(() => {
        
//         User.find().then((user) => {
//             res.send(user);
//         })
//     })



// })
//===============================================================================


//  var decoded = jwt.verify(req.headers.token, 'key');
//  res.send(decoded.foo[0].login);
// })

//===============================================================================

// rout.post('/add', (req, res) => {
//     var password = req.body.password;
//     var login = req.body.login;
//     var name = req.body.name;


//     var user = new User({
//         login: login,
//         password: password,
//         name: name,
//         array: [],
//         ident: Math.random(),

//     });


//     user.save().then((user) => {
//         console.log('add new user');
//     })
// })



module.exports = rout;
