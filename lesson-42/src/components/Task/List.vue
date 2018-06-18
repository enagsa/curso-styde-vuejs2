<template>
	<div class="row">
        <div class="col-xs-6 col-md-6">
    		<div class="top">
                <h2>Tareas</h2>
                <router-link :to="{name: 'task.create'}">Nueva tarea</router-link>
            </div>
            <ul class="list-group tasks-list">
                <task-item v-for="(task, index) in tasks" :key="task.id" :task="task"></task-item>
            </ul>

    	    <p><a @click.prevent="deleteCompleted" href="#">Eliminar tareas completadas</a></p>
        </div>

        <div class="col-xs-6 col-md-6">
            <router-view></router-view>
        </div>
	</div>
</template>

<script>
import store from 'store'
import TaskItem from './ListItem.vue'

export default{
	components: {
        'task-item': TaskItem
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
        deleteCompleted(){
            this.tasks = this.tasks.filter(task => task.pending);
        }
    }
}
</script>

<style lang="scss">
    .top{
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
    .tasks-list {
        margin-bottom: 40px;
    }
</style>