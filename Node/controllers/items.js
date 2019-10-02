var User = require('../models/UserMongo');
var Comment = require('../models/Comment');
var Items = require('../models/Items');

class ItemController {
    all() {
        return new Promise((resolve, reject) => {
            Items.find({}, (err, result) => {
                resolve(result);
            })
        })
    }

    del(team, text) {
        return new Promise((resolve, reject) => {
            Comment.remove({ team: team, text: text }).then((comment) => {
                Comment.find({ team: team }).then((user) => {
                    resolve(user);
                })
            })
        })
    }

    add(text, user, team) {
        return new Promise((resolve, reject) => {

            User.find({ _id: user }).then((user) => {
                var comment = new Comment({
                    text: text,
                    img: user[0].img,
                    team: team
                });

                comment.save().then((user) => {

                    Comment.find({ team: team }).then((items) => {
                        resolve(items);
                    })
                })
            })
        })
    }
    addItem(items) {
        return new Promise((resolve, reject) => {
            var item = new Items({
                items: items
            });

            item.save().then(() => {
               
                Items.find().then((items) => {
                    resolve(items);
                })
            })
        })
    }

    login(login,password){
        return new Promise((resolve,resject)=>{
            User.find({ login: login, password: password }).then((user) => {
                if (user != 0) {
                    resolve(user[0]._id);
                }
            })
        })
    }
    


}

module.exports = ItemController;