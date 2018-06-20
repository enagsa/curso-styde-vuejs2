<template>
	<div v-if="task">
		<form @submit.prevent="update">
	        <h2>Nueva tarea:</h2>
	        <div class="form-group">
	            <label for="title">Título</label>
	            <input type="text" v-model="task.title" class="form-control" id="title"/>
	        </div>

	        <div class="form-group">
	            <label for="description">Descripción</label>
	            <textarea v-model="task.description" rows="6" cols="30" class="form-control" id="description"></textarea>
	        </div>

	        <button class="btn btn-primary">Actualizar tarea</button>
	        <router-link class="btn btn-link" :to="{name: 'tasks'}">Cancelar</router-link>
	    </form>
	</div>
</template>

<script>
	import store from 'store'

	export default{
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
			update(){
				store.updateTask(this.id, this.task);
				this.$router.push({
					name: 'task.details',
					params: {id: this.id}
				})
			}
		}
	}
</script>