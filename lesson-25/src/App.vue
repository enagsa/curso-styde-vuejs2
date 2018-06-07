<template>
    <div id="app" class="container">
        <h2>Lista de Tareas</h2>
        
        <app-task-list :tasks="tasks"></app-task-list>

        <app-task-list :tasks="tasks2"></app-task-list>

        <p><a @click.prevent="deleteCompleted" href="#">Eliminar tareas completadas</a></p>

        <h4>Crear:</h4>
        <app-task-form @created="createTask"></app-task-form>

        <h4>Imprimir:</h4>
        <app-task-form @created="alertTask"></app-task-form>

        <footer class="footer">
            <p>&copy; 2018 Styde.net</p>
        </footer>
    </div>
</template>

<script>
import TaskList from './TaskList.vue'
import TaskForm from './TaskForm.vue'

export default {    
    components: {
        'app-task-list': TaskList,
        'app-task-form': TaskForm
    },
    data(){
        return {
            tasks: [
                {
                    description: 'Aprender Vue.js',
                    pending: true
                },
                {
                    description: 'Suscribirse a Styde.net',
                    pending: true
                },
                {
                    description: 'Crear una API',
                    pending: false
                }
            ],
            tasks2: [
                {
                    description: 'Aprender Vue 2',
                    pending: true
                },
                {
                    description: 'Suscribirse a Styde',
                    pending: true
                }
            ]
        }
    },
    created(){
        this.tasks.forEach((task, index) => this.$set(task, 'id', index+1));
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