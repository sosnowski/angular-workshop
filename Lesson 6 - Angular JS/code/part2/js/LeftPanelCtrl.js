angular.module('myapp').controller('LeftPanelCtrl', function ($scope, $http, $rootScope) {
	$scope.elements = [];

	$http.get('/data.json').success(function (data) {
		$scope.elements = data;
		console.log(data);

		$scope.$emit('load', data);
	});

	$scope.display = function (elementRecord) {
		$rootScope.$broadcast('details', elementRecord);
	};
});
