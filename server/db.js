const mongoose = require('mongoose');

let DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/pinterestDB';
//I need to put environmet variable in heroku

//mongoose.connect('mongodb://localhost:27017/pinterestDB');
mongoose.connect(DB_URL);

module.exports = mongoose;





// const { MongoClient } = require('mongodb');

// module.exports = () => {
//     return MongoClient.connect('mongodb://localhost:27017').then(client => {
//         return client.db('pinterestDB'); //inside the brackets it requires to be in the db name
//     });
// };