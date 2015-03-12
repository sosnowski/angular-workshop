angular.module('myapp', []).directive('uamSearchField', function () {
	return {
		restrict: 'E',
		scope: {

		},
		controller: function ($scope) {
			// scope.value - binding
			// scope.showClear - attribute
			$scope.clear = function () {

			};


		},
		templateUrl: 'templates/search_field.html'
	};
});


angular.module('myapp').controller('AppCtrl', function ($scope) {
	$scope.searchValue = 'Initial search';
});
