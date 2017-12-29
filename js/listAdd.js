var app = new Vue({
	el: '#app',

	data: {
		fruits: ['apple', 'mango', 'grapefruit', 'orange']
	},

	mounted(){
		document.querySelector('#btnAddName').addEventListener('click', () => {
			var name = document.querySelector('#txtName');
			app.fruits.push(name.value);
			name.value = '';
		});
	}

});