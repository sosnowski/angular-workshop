angular.module('myapp').controller('LeftPanelCtrl', function ($scope, $http) {
	$scope.elements = [];

	$http.get('data.json').success(function (data) {
		console.dir(data);
		$scope.elements = data;
		$scope.$emit('data', data);
	}).error(function (err) {
		throw err;
	});
});
