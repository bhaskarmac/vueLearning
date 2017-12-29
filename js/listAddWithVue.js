var app = new Vue({
	el: '#app',

	data: {
		newName: '',
		fruits: ['apple', 'mango', 'grapefruit', 'orange']
	},

	methods: {
		addFruit(){
			console.log('Adding fruit');
			this.fruits.push(this.newName);
			this.newName = '';
		}
	},

	mounted(){
	}

});