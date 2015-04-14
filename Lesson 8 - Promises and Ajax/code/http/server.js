var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var savedData = [
	{
		id: 1,
		name: 'Test1',
		lastUpdated: new Date(),
		count: 0
	},
	{
		id: 2,
		name: 'Test2',
		lastUpdated: new Date(),
		count: 0
	},
	{
		id: 3,
		name: 'Test3',
		lastUpdated: new Date(),
		count: 0
	}
];


app.use(express.static('./'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse text
app.use(bodyParser.text());

// parse application/json
app.use(bodyParser.json());



//define routing here

app.get('/elements', function (req, res) {
	res.json(savedData);
});

app.put('/elements/:id', function (req, res) {
	var element;
	savedData.forEach(function (record) {
		console.log(req.params.id);
		if (record.id === +req.params.id) {
			element = record;
		}
	});

	if (!element) {
		res.status(404).send('Record not found');
	} else {
		element.count = req.body.count;
		element.lastUpdated = new Date();
		res.json(element);
	}
});

var server = app.listen(8080, function () {

  var port = server.address().port;

  console.log('Example app listening at http://localhost:%s', port);

});
