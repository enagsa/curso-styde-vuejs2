<template>
	<div>
		<task-list :tasks="tasks"></task-list>

	    <p><a @click.prevent="deleteCompleted" href="#">Eliminar tareas completadas</a></p>

	    <h2 class="subtitle">Nueva tarea:</h2>
	    <task-form @created="createTask"></task-form>
	</div>
</template>

<script>
import store from 'store'
import TaskList from './List.vue'
import TaskForm from './CreateForm.vue'

export default{
	components: {
        'task-list': TaskList,
        'task-form': TaskForm
    },
    data(){
        return {
            tasks: store.state.tasks
        }
    },
    methods: {
        createTask(task){
            this.tasks.push(task);
        },
        alertTask(task){
            alert(task.description);
        },
        deleteCompleted(){
            this.tasks = this.tasks.filter(task => task.pending);
        }
    }
}
</script>