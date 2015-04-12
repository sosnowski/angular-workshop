describe("createClassInstance", function() {

	describe('Constructor is not returning anything', function () {
		var Example;
		beforeEach(function () {
			Example = function (arg1, arg2) {
				this.firstArg = arg1;
				this.secondArg = arg2;
				this.number = 33;

				this.obj = {};
			};

			Example.prototype.someMethod = function () { return 1; };
			Example.prototype.value = 5;
		});

		it('Should return an object and not a null', function () {
			var res = APP.createClassInstance(Example);
			expect(typeof res).toBe('object');
			expect(res).not.toBe(null);
		});

		it('Should not return a global object', function () {
			var res = APP.createClassInstance(Example);
			expect(res).not.toBe(window);
		})

		it('Should return an object with a proper instance attributes', function () {
			var res = APP.createClassInstance(Example);
			expect(res.number).toBe(33);
		});

		it('Should pass proper arguments to the constructor function', function () {
			var res = APP.createClassInstance(Example, 'uno', 'duo');
			expect(res.firstArg).toBe('uno');
			expect(res.secondArg).toBe('duo');
		});

		it('Instance attributes should be unique for every instance', function () {
			var res1 = APP.createClassInstance(Example), res2 = APP.createClassInstance(Example);

			expect(res1.obj).not.toBe(res2.obj);
		});

		describe('Prototype', function () {
			var res1, res2;
			beforeEach(function () {
				res1 = APP.createClassInstance(Example);
				res2 = APP.createClassInstance(Example);
			});

			it('Should behave properly for isntanceof operator', function () {
				expect(res1 instanceof Example).toBe(true);
				expect(res2 instanceof Example).toBe(true);
			});

			it('Should create object that has a valid method in the prototype', function () {
				expect(typeof res1.someMethod).toBe('function');
				expect(res1.someMethod()).toBe(1);
				delete res1.someMethod;
				expect(typeof res1.someMethod).toBe('function');
			});

			it('Should create object that has a valid attribute in the prototype', function () {
				expect(res2.value).toBe(5);
			});

			it('Should be able to overwrite the prototype attribute', function () {

				res2.value = 4;
				expect(res2.value).toBe(4);
				expect(res1.value).toBe(5);
			});

			it('Should be able to restore the original prototype attribute', function () {
				res1.value = 4;
				delete res2.value;
				expect(res2.value).toBe(5)
			});

			it('Prototype attributes should be shared among instances', function () {
				expect(res1.someMethod).toBe(res2.someMethod);
			});
		});
	});

	describe('Contructor returns a value', function () {
		var Example, res;
		beforeEach(function () {
			Example = function () {
				this.number = 33;
				return {
					key: 'value'
				};
			};

			Example.prototype.someMethod = function () { return 1; };

			res = APP.createClassInstance(Example);
		});

		it('Should return an object', function () {
			expect(typeof res).toBe('object');
		});

		it('Should not be the instance of the class', function () {
			expect(res instanceof Example).toBe(false);
		});

		it('Should not have any of the class methods and attributes', function () {
			expect(res.number).toBe(undefined);
			expect(res.someMethod).toBe(undefined);
		});

		it('Should be a custom object', function () {
			expect(res.key).toBe('value');
		});
	});
});
