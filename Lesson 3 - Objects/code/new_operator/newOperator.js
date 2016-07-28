(function (global) {
	if (!global.APP) {
		global.APP = {};
	}

	//Implement function that will work like a new operator;
	global.APP.createClassInstance = function (MyClass) {
		var properArgs = Array.prototype.slice.call(arguments, 1);
		var inst = Object.create(MyClass.prototype);
		var res = MyClass.apply(inst, properArgs);
		return (res && typeof res === 'object') ? res : inst;
	};


	//Example usage:
	/*

	//automatically created
	function MyClass(arg1, arg2, arg3) {
		this.value = arg1 + arg2 + arg3;
	}

	MyClass.prototype.myMethod = function () {}
	// ----------------------

	var inst = new MyClass();

	var inst = createClassInstance(MyClass);


	var inst = global.APP.createClassInstance(MyClass, arg1, arg2, arg3, arg4, arg5);

	//var inst = new MyClass();

	inst.value; //jakas wartosc
	inst.myMethod();


	*/

}(window));
