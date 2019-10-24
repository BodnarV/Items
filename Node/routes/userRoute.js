var express = require('express');
var rout = express.Router();

const NodeCache = require("node-cache");
const myCache = new NodeCache();

var request = require('request');


rout.get('/all', async (req,res)=>{
    var text = req.query.obj;
    var num = req.query.obj2;

    var page1;
    var page2;

    var films = [];

    myCache.get(text, function (err, value) {
        if (value != undefined) {
            console.log('from Cache');
            res.send(value)
        } else {
            //==========================================================================================================

            request(`http://www.omdbapi.com/?apikey=c7c4011c&s=${text}&page=1`, function (error, response, body1) {
                if (!error) {
                    page1 = JSON.parse(body1)
                    films.push(page1);

                    request(`http://www.omdbapi.com/?apikey=c7c4011c&s=${text}&page=2`, function (error, response, body2) {
                        if (!error) {
                            page2 = JSON.parse(body2)
                            films.push(page2);

                            res.send(films);

                            myCache.set(text, films, function (err, success) {
                                if (!err && success) {
                                    console.log('success add :' + text);
                                }
                            });
                        }
                    })
                }
            })

            //==========================================================================================================
        }
    })

})

module.exports = rout;
