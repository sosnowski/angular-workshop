(function (global) {
	if (!global.APP) {
		global.APP = {};
	}

	//Implement function that will work like a new operator;
	global.APP.createClassInstance = function (ClassFunction) {
		var properArgs = Array.prototype.slice.call(arguments, 1);

	};


	//Example usage:
	/*
	var inst = global.APP.createClassInstance(MyClass, arg1, arg2, arg3);
	*/

}(window));
