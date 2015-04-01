angular.module('myapp', ['ui.router']).config(function ($stateProvider) {
	$stateProvider.state('users', {
		url: '/users',
		templateUrl: 'partials/list.html',
		controller: 'UsersListCtrl'
	}).state('user', {
		url: '/user/:userId',
		templateUrl: 'partials/user.html',
		controller: 'UserCtrl'
	}).state('user.comments', {
		url: '/comments',
		templateUrl: 'partials/comments.html',
		controller: 'CommentsCtrl'
	});
});
