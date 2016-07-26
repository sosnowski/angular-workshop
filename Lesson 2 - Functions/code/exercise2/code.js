(function (global) {
	var mapArray;

	if (!global.APP) {
		global.APP = {};
	}

	mapArray = function (array, callback, ctx) {

	};

	global.APP.mapArray = mapArray;

}(window));

/*

Przykład użycia:

var arr = [1, 2, 3, 4, 5, 6];

var newArray = mapArray(arr, function (arrElement, index, array) {
	return arrElement + 2;
});

newArray; // [3, 4, 5, 6, 7, 8]

var valueProvider = {
	getValue: function () {
		return 15;
	}
};

var newArray2 = mapArray(arr, function (arrElement, index, array) {
	return arrElement * this.getValue();
}, valueProvider);

newArray2; [10, 20, 30, 40, 50, 60]
*/
