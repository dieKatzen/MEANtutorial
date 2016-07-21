//load the express package and create our app
var express = require('express'),
	app		= express();
	path 	= require('path');
	
//send our index.html file to the user for the home page
app.get('/',function(req, res){
	res.sendFile(path.join(__dirname+'/first-test.html'));
	
	//create routes for the admin section
});

app.route('/login')
//show the form (GET http://localhost:1337/login)
.get(function(req,res){
	res.send('this is the login form');
})
//process the form(POST http://localhost:1337/login)
.post(function(req,res){
	console.log('processing');
	res.send('processing the login form!');
});



	// get an instance of the router 
	var adminRouter = express.Router();
	
			//route middleware to validate :name
	adminRouter.param('name', function(req, res, next, name){
		//do validation on name
		//blah blah validation?
		// log something so we know its working
		console.log('doing name validation on' + name);
		
		//once validated, save the new item in the req
		req.name = name;
		
		//go to next thing
		next();
		
	}); 
		
	//route with paramets(http://locahost:1337/admin/hello/:name)
		adminRouter.get('/hello/:name', function(req,res){
			res.send('hello'+ req.name + '!');
	}); 


  	adminRouter.use(function(req, res, next){
		
		//log each request to the console
		console.log(req.method, req.url);
		
		//continue doing what we were doing and go to the routeEvents
		next();
		
	});
	
	//route with parameters(http://localhost:1337/admin/users/:name)
		adminRouter.get('/users/:name', function(req, res){
			res.send('Hey There ' + req.params.name + '!')
	}); 
	
	
	//admin mainpage. the dashboard(http://locathost:1337/admin)
		adminRouter.get('/', function(req, res){
			res.send('I am the dashboard!');
	});

	//users page(http://localhost:1337/admin/users)
	adminRouter.get('/users', function(req,res){
			res.send('I show all the users!');
	});
	
	//posts page (http:localhost:1337/admin/posts)
	adminRouter.get('/posts',function(req,res){
		res.send('I show all the posts!');
	}); 
	
	
	//apply the routes to our application
	app.use('/admin', adminRouter);

//start the server
app.listen(1337)
console.log('1337 is the port')	