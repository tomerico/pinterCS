const db = require('../db');

//define how user object in the users collection will look like
const userSchema = new db.Schema({
    name: String,
    lastName: String,
    email: String
});

//create working model from

const UsersList = db.model('UsersList', userSchema); //User is the collection name in the mongodb
//create class with methods (according to what is defined in router.post) and creates the connection to the data base 

module.exports = UsersList;

