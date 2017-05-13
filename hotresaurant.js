//packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//set up the express app
var app = express();
var PORT = 3000;

//Set up the Express app for handling data
app.use(bodyParser.json());
//security feature - sort of encrypts 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//array of reservation onjects
var reservations = [{
	"customerName": "henrie",
	"phoneNumber": "555-555-5555",
	"customerEmail": "henrie@gmail.com",
	"customerID": "12334"

	},{
	"customerName": "bill",
	"phoneNumber": "777-444-5555",
	"customerEmail": "bill@gmail.com",
	"customerID": "554423"
	}
	];

var waitingList = [

];


//Routes
app.get("/", function(req, res){
	//send the html page after use makes the above request
	res.sendFile(path.join(__dirname, "restaurant.html"))
});


app.get("/tables", function(req, res){

	res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/reservation", function(req, res){

	res.sendFile(path.join(__dirname, "reservation.html"))
});


app.get("/api/tables", function(req, res){

	return res.json(reservations);
});

//create new reservation
app.post("/api/tables", function(req, res) {
	var newReservation = req.body;
	

	//if reservations are more than 5
	if(reservations.length>4){
		//add to wait list
		waitingList.push(newReservation);

}else{

	reservations.push(newReservation);

};

});

//create new reservation
app.get("/api/waitlist", function(req, res) {
	return res.json(waitingList);

});


//




//lisetning port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
