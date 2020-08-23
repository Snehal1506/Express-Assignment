var express = require('express');
var app = express();

function isPerfectNumber(number)
{
	var temp = 0;
	for(var i=1; i<=number/2; i++){
		if(number%i ==0){
			temp += i;
		}
	}
	if(temp == number && temp!= 0){
		return(number + " Is a perfect number");
	}else{
		return(number + " Is not a perfect number");
	}
};

app.get('/isPerfectNumber/:number', function(req, res){
	var number = req.params.number;
	res.send(isPerfectNumber(number));
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port);
});

