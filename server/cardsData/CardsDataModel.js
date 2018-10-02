const db = require('../db');

//define how user object in the users collection will look like
const cardsDataSchema = new db.Schema({
    title: String,
    body: String,
    img: String,
    link:String,
    category: String 
});

//create working model from

const CardsData = db.model('CardsData', cardsDataSchema); //User is the collection name in the mongodb
//console.log(CardsData);
//create class with methods (according to what is defined in router.post) and creates the connection to the data base 

module.exports = CardsData;

