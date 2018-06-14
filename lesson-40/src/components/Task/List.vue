<template>
    <div>
        <h2>Tareas</h2> 
    	<ul class="list-group tasks-list">
            <list-item v-for="(task, index) in tasks" :key="task.id" :task="task" :index="index" @remove="deleteTask"></list-item>
        </ul>
    </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default{
	components:{
        'list-item': ListItem
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