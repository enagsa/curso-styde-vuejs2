let tasks = [
    {
        title: 'Aprender Vue.js',
        pending: true
    },
    {
        title: 'Suscribirse a Styde.net',
        pending: true
    },
    {
        title: 'Crear una API',
        pending: false
    }
];

tasks.forEach((task, index) => {
	task.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra rhoncus tellus, in molestie massa efficitur vel.';
	task.id = index+1
});

export default {
	state: {
		tasks
	},
	findTask(id){
		return this.state.tasks.find(task => task.id == id)
	},
    createTask(task){
        task.id = this.state.tasks.length + 1;
        this.state.tasks.push(task)
    },
    toogleTask(task){
        task.pending = !task.pending;
    },
    deleteTask(id){
        let index = this.state.tasks.findIndex(task => task.id == id);
        this.state.tasks.splice(index, 1);
    }
}