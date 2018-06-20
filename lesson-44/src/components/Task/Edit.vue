<script>
	import store from 'store'
	import Form from './Form.vue'

	export default{
		render(createElement){
			return createElement(Form, {
				props: {
					title: 'Actualizando tarea',
					action: 'Actualizar tarea',
					task: this.task
				},
				on: {
					save: this.update
				}
			})
		},
		props: ['id'],
		data(){
			return {
				task: null
			}
		},
		created(){
			this.findTask();
		},
		watch: {
			'id': 'findTask'
		},
		methods: {
			findTask(){
				this.task = clone(store.findTask(this.id));
				not_found_unless(this.task);
			},
			update(updatedTask){
				store.updateTask(this.id, updatedTask);
				this.$router.push({
					name: 'task.details',
					params: {id: this.id}
				})
			}
		}
	}
</script>