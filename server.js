// BASE SETUP
// =============================================================================

var express    = require('express');    
var app        = express();                 
var bodyParser = require('body-parser');
var paginate = require('paginate-array');

var port = process.env.PORT || 8080;   

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DATABASE SETUP
// =============================================================================
var itemsDB;
var dbURL = 'mongodb://meiwey:test1234@itemsdb-shard-00-00-4c3ma.mongodb.net:27017,itemsdb-shard-00-01-4c3ma.mongodb.net:27017,itemsdb-shard-00-02-4c3ma.mongodb.net:27017/test?ssl=true&replicaSet=itemsDB-shard-0&authSource=admin';
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect(dbURL, (err, database) => {
	if(err) 
		return console.log(err);
	db = database;
	app.listen(port);
	console.log('Database connected. Listening to ' + port);

})

// OBJECT DEFINITION
// =============================================================================
var User = function (name, email, username, password) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
}

// API FUNCTIONS
// =============================================================================


// POST API
app.post('/users',(req,res)=>{
	
	var userToInsert = new User();
	userToInsert.name = req.body.name;
	userToInsert.email = req.body.email;
	userToInsert.username = req.body.username;
	userToInsert.password = req.body.password;
	
	db.collection('users').save(userToInsert, (err,result)=> {
	if(err)
		return console.log(err);
		
	console.log('User saved to Database');
	res.redirect('/items');
	})
})

// GET API
app.get('/users',(req,res)=>{
	
	var pageNumber = 1;
	var numItemsPerPage = 30;
	var cursor = itemsDB.collection('items').find();
	cursor.toArray(function(err,results){
		const paginateCollection = paginate(results,pageNumber, numItemsPerPage);
		/*
		var parentObj = {"items":results}
		res.json(parentObj);
		*/
		res.json(paginateCollection);
	});
	
})

