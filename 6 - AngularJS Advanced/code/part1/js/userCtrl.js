angular.module('myapp').controller('UserCtrl', function ($scope, $stateParams) {
	$scope.userId = $stateParams.userId;
});
