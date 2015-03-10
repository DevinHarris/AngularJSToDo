angular.module('todo')
	.controller('MainCtrl', [function(){
		var vm = this;
		vm.title = "ToDo List";

		vm.tasks = [];

		vm.addTask = function() {
			vm.tasks.push({name: vm.taskName, disc: vm.taskDisc, done: false});
			vm.taskName = '';
			vm.taskDisc = '';
		};

		vm.removeLast = function() {
			vm.tasks.pop();
		};

		vm.setUserName = function(name) {
			// Code 
		};

	}]);