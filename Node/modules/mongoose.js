var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Bogdanus2:qazwsxedcrfvt123$@cluster1-54aqw.mongodb.net/test?retryWrites=true", { useNewUrlParser: true }, () => { console.log('connect') });
module.exports = mongoose;
