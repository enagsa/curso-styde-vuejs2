<template>
    <div>
        <h2>Tareas</h2> 
    	<ul class="list-group tasks-list">
            <app-task v-for="(task, index) in tasks" :key="task.id" :task="task" :index="index" @remove="deleteTask"></app-task>
        </ul>
    </div>
</template>

<script>
import Task from './Task.vue'

export default{
	components:{
        'app-task': Task
	},
	props: ['tasks'],
	methods: {		
        deleteTask(index){
            this.tasks.splice(index, 1);
        }
	},
    computed:{
        hasPendingTasks(){
            return this.tasks.some(task=> task.pending);
        }
    }
}
</script>

<style lang="scss">
	.tasks-list {
        margin-bottom: 40px;
    }
</style>