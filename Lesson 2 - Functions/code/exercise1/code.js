var obj = {
	name: 'Damian',
	element: '<b></b>',
    addOnClick: function () {
		var me = this;
		console.log(this.name); //ok
		$(this.element/*ok*/).onclick(function () {
			me.name = 'Tomasz';
		});
  	}
}

obj.addOnClick();