angular.module('myapp').controller('RightPanelCtrl', function ($scope) {
	$scope.$on('details', function (ev, record) {
		$scope.record = record;
	});
});
