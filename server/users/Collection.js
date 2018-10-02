const connectdb = require('../db');
const { ObjectID } = require('mongodb');

//this function first call to a function (in db.js) that calls that connect specific DB
function getUsersCollection() {
	return connectdb()
		.then((db) => {
			return db.collection('users-list'); //ask specific collection (a table) from the DB)
		});
}

function getAllUsers() {
	return getUsersCollection()
		.then((collection) => {
			return collection.find({}).toArray(); //?????
		});
}

function getUser(id) {
	return getUsersCollection()
		.then((collection) => {
			return collection.findOne({ _id: ObjectID(id) });//?????
		});
}

function insertUser(user){
	return getUsersCollection()
		.then(collection => collection.insertOne(user))

}

///////////added on the lesson of 14.8.18////////////
function updateUser(userId, params){
	return getUsersCollection()
	.then(collection => collection
		.updateOne(
			{_id: ObjectID(userID)},
			{$set: params} //what to change, how to change
			))
}

function deleteUser(userId){
	return getUsersCollection()
	.then(collection => collection
	.deleteOne({_id: ObjectID(userId)})) 

}

module.exports = {
	getAllUsers,
	getUser,
	insertUser,
	updateUser,
	deleteUser
};