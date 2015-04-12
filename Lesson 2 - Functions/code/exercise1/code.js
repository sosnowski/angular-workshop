(function (global) {
	var addManyValues;

	if (!global.APP) {
		global.APP = {};
	}

	addManyValues = function () {

	};

	global.APP.addManyValues = addManyValues;

}(window));

/*

Przykład użycia:

var addRest = APP.addManyValues(2, 3);

addRest(1, 1, 3); // 10
addRest(3, 3); // 11
addRest(1, 1, 1, 1, 1); //10

var addOther = APP.addManyValues(0, 10, 10);
addOther(10); // 30

*/
