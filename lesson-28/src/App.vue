<template>
    <div id="app" class="container">            
        <app-task-list :tasks="tasks"></app-task-list>

        <p><a @click.prevent="deleteCompleted" href="#">Eliminar tareas completadas</a></p>

        <h2 class="subtitle">Nueva tarea:</h2>
        <app-task-form @created="createTask"></app-task-form>

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

<style lang="scss">
    body {
        margin: 10px;
    }

    .container {
        max-width: 650px;

        h2 {
            margin-bottom: 20px;
        }    

        footer {
            margin: 40px 0;
            padding-top: 20px;
            border-top: 1px solid #ccc;
            color: #999;
        }
    }
</style>