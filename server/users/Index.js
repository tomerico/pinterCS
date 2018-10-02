const connectdb = require('mongodb'); 
const express = require('express');
const router = express.Router();
const User = require('./UserModel');

router.get('/', (req, res) => {

	User.find({})//go to the 
		.then(users => res.send(users))
		.catch(e => res.status(400).send(e.message))
});

router.post('/', (req, res) => {
	const user = new User(req.body); //create the user according to the schem I built, and save it
	user.save()//save in db and send back the user taht was created
		.then(user => res.send(user)) //no need to do toJSON as .then returns JSON and user get it - res.send(user.toJSON());
		.catch(e => res.status(400).send(e.message))
});

router.get('/:userId', (req, res) => {
		User.findById(req.params.userId)
		.then(user => {
			if(user)
				res.send(user);
			else
				res.status(404).send("User not found");	
		})
		.catch(e => res.status(400).send(e.message));
});

router.put('/:userId', (req, res) => {
	User.findByIdAndUpdate(req.params.userId, req.body)
	.then(user => {
		if(user)
			res.send(user);
		else
			res.status(404).send("User not found");	
	})
	.catch(e => res.status(400).send(e.message));
});

router.delete('/:userId', (req, res) => {
	User.findByIdAndDelete(req.params.userId)
	.then(user => {
		if(user)
			res.send(user);
		else
			res.status(404).send("User not found");	
	})
	.catch(e => res.status(400).send(e.message));
});

module.exports = router;


// function getUser(id) {
// 	return users.find(user => user.id == id);
// }

// router.get('/', (req, res) => {
// 	collection
// 		.getAllUsers()
// 		.then(data => res.send(data));
// });



// router.get('/:userId', (req, res) => {
// 	collection
// 		.getUser(req.params.userId)
// 		.then(data => res.send(data))
// });

// router.put('/:userId', (req, res) => {
// 	collection
// 		.updateUser(req.params.userId, req.body)
// 		.then(data => res.send(data))
// });

// router.delete('/:userId', (req, res) => {
// 	collection
// 		.deleteUser(req.params.userId)
// 		.then(data => res.send(data))
// });



/////////////////DRAFT/////////

// function saveJson(users) {
// 	fs.writeFileSync(__dirname + '/users.json', JSON.stringify(users)); //__dirname is the current script location
// }

// router.get('/', (request, response) => {
//     response.send(users)
// });


// router.post('/', (req, res) => {//req and res are objects

//         const user = users.find(user => user.id == req.body.id);

//         if(!user){
//             users.push(req.body);  
//             res.send(req.body); 
//             //stringify since we need to transfer to text as we can write to file only text
//             fs.writeFileSync('/users.json', JSON.stringify(users, '\t'));             
//         } else
//         {
//             res 
//                 .status(400)
//                 .send(`User with ID ${req.body.id} already exists`);
//         }   
//     });


// router.get('/:userId', (req, res) => {
//     const user = getUser(req.params.userId);
//     if(user) {
//         res.send(user);
//     } else {
//         res
//             .status(404)
//             .send("User not found!");
//     }
// });

// router.get('/:userId', (req, res) => {
// 	collection
// 		.getUser(req.params.userId)
// 		.then(data => res.send(data))
// });

// router.put('/:userId', (req, res) => {
// 	users = users.filter(user => user.id != req.params.userId);
// 	users.push(req.body);

// 	res.send(req.body);
// 	saveJson(users);
// });

// router.delete('/:userId', (req, res) => {
// 	users = users.filter(user => user.id != req.params.userId);

// 	res.send("OK");
// 	saveJson(users);
// });






















// const connectdb = require('mongodb'); 
// const express = require('express');
// const router = express.Router();
// const collection = require('./collection');

// function getUser(id) {
// 	return users.find(user => user.id == id);
// }

// //  the mark '/' means /api/users/ - called with GET request. in req we get more data (params or body)
// router.get('/', (req, res) => {
// 	collection
// 		.getAllUsers()
// 		.then(data => res.send(data));
// });

// //in req we can access the data (forms and etc.) that is transferred from the client (usually json)
// router.post('/', (req, res) => {
// 	collection
// 		.insertUser(req.body)
// 		.then(user => res.send(user));
// });

// //in req we can access the data that is transferred from the url (params to search and etc.)
// router.get('/:userId', (req, res) => {
// 	collection
// 		.getUser(req.params.userId)
// 		.then(data => res.send(data))
// });

// router.put('/:userId', (req, res) => {
// 	collection
// 		.updateUser(req.params.userId, req.body)
// 		.then(data => res.send(data))
// });

// router.delete('/:userId', (req, res) => {
// 	collection
// 		.deleteUser(req.params.userId)
// 		.then(data => res.send(data))
// });


// module.exports = router;

