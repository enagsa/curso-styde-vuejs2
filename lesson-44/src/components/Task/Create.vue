<script>
import store from 'store'
import Form from './Form.vue'

export default{
    render(createElement){
        return createElement(Form, {
            props: {
                title: 'Nueva tarea',
                action: 'Crear tarea',
                task: this.task
            },
            on: {
                save: this.create
            }
        });
    },
	data(){
		return {
			task: {
                title: '',
                description: '',
                pending: true
            }
		}
	},
	methods:{
		create(newTask){
			store.createTask(newTask);
            this.$router.push({
                name: 'task.details',
                params: {id: newTask.id}
            })
        }
	}
}
</script>