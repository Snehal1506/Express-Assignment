var express = require('express');
var app = express();

function countChars(string)
{
	no_of_occ = new Map();
	string = string.toLowerCase();
	letters = Array.from(string);
	//console.log(letters);
	letters.forEach(function (value, i){
		no_of_occ.set(value, 0);
		letters.forEach(function (value1,j){
			if (value == value1){
				no_of_occ.set(value, (no_of_occ.get(value) + 1));
			}
		})
	})
	//console.log(no_of_occ);
	for(var [key, val] of no_of_occ.entries()){
		console.log(key,val);
	}
};



app.get('/countChars/:string', function(req, res){
	var string = req.params.string;
	res.send(countChars(string));
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port);
});