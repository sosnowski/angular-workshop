angular.module('myapp').controller('MyCtrl', function ($scope) {
	$scope.name = 'Gucio';

	$scope.clear = function () {
		$scope.name = '';
	}
});
