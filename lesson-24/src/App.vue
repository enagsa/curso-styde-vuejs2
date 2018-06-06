<template>
    <div id="app" class="container">
        <h2>Lista de Tareas</h2>
        <ul class="list-group tasks">
            <app-task v-for="(task, index) in tasks" :key="task.id" :task="task" :index="index" @remove="deleteTask"></app-task>
        </ul>

        <p><a @click.prevent="deleteCompleted" href="#">Eliminar tareas completadas</a></p>

        <form @submit.prevent="createTask" class="new-task-form">
            <input type="text" v-model="new_task" class="form-control">
            <button class="btn btn-primary">Crear tarea</button>
        </form>

        <footer class="footer">
            <p>&copy; 2018 Styde.net</p>
        </footer>
    </div>
</template>

<script>
import Task from './Task.vue'

export default {    
    components: {
        'app-task': Task
    },
    data(){
        return {
            new_task: '',
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
        createTask(){
            this.tasks.push({
                description: this.new_task,
                pending: true,
                editing: false
            });

            this.new_task = '';
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
        },
        deleteCompleted(){
            this.tasks = this.tasks.filter(task => task.pending);
        }
    }
}
</script>