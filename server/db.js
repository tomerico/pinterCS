const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pinterestDB');

module.exports = mongoose;





// const { MongoClient } = require('mongodb');

// module.exports = () => {
//     return MongoClient.connect('mongodb://localhost:27017').then(client => {
//         return client.db('pinterestDB'); //inside the brackets it requires to be in the db name
//     });
// };