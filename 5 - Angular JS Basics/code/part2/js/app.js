angular.module('myapp', []).controller('AppCtrl', function ($scope) {
	$scope.count = 0;

	$scope.$on('load', function (event, data) {
		$scope.count = data.length;
	});
});
