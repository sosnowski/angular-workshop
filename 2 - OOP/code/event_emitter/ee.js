(function (global) {
	var EE;

	if (!global.rule) {
		global.rule = {};
	}

	EE = function () {
		//store the listeners somewhere
		this.listeners = {};
	};

	EE.prototype.on = function (eventName, listener, context) {
		var obj, me = this;
		this.listeners[eventName] = this.listeners[eventName] || [];

		obj = {
			list: listener,
			ctx: context
		};
		this.listeners[eventName].push(obj);

		return function () {
			var ind = me.listeners[eventName].indexOf(obj);
			if (ind > -1) {
				me.listeners[eventName].splice(ind, 1);
			}
		};
	};

	EE.prototype.emit = function (eventName) {
		var args = Array.prototype.slice.call(arguments, 1);
		if (this.listeners[eventName]) {
			this.listeners[eventName].forEach(function (listenerData) {
				listenerData.list.apply(listenerData.ctx || window, args);
			});
		}
	};

//	var ee = new EE();
//  var customCtx = { key: value }
//
//	var removeListener = ee.on('test', function (arg1, arg2) {
//		console.log(arg1, arg2); //1, 2
//		console.log(this.key); //value
//	}, customCtx);
//
//	ee.emit('test', 1, 2);
//
//	removeListener(); //removes my listener from the event emitter;
//
//	ee.emit('test'); //nothing will execute

	global.rule.EventEmitter = EE;

}(window));
