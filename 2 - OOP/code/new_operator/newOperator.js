(function (global) {
	if (!global.rule) {
		global.rule = {};
	}

	//Implement function that will work like a new operator;
	global.rule.createClassInstance = function (ClassFunction) {
		var properArgs = Array.prototype.slice.call(arguments, 1);

	};


	//Example usage:
	/*
	var inst = global.rule.createClassInstance(MyClass, arg1, arg2, arg3);
	*/

}(window));
