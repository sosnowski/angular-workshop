angular.module('myapp', []).controller('AppCtrl', function ($scope) {
	$scope.count = 0;
	$scope.$on('data', function (e, data) {
		$scope.count = data.length;
	});
});
