angular.module('myapp', []).directive('APPSearchField', function () {
	return {
		restrict: 'E',
		scope: {

		},
		controller: function ($scope) {

		},
		templateUrl: ''
	};
});


angular.module('myapp').controller('AppCtrl', function ($scope) {
	$scope.searchValue = '';
});
