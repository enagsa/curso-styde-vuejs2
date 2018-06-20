<template>
	<form @submit.prevent="created">
        <h2>Nueva tarea:</h2>
        <div class="form-group">
            <label for="title">Título</label>
            <input type="text" v-model="task.title" class="form-control" id="title"/>
        </div>

        <div class="form-group">
            <label for="description">Descripción</label>
            <textarea v-model="task.description" rows="6" cols="30" class="form-control" id="description"></textarea>
        </div>

        <button class="btn btn-primary">Crear tarea</button>
    </form>
</template>

<script>
import store from 'store'

export default{
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
		created(){
			store.createTask(this.task);
            this.$router.push({
                name: 'task.details',
                params: {id: this.task.id}
            })
        }
	}
}
</script>