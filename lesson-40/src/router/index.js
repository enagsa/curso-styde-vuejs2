import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'components/Dashboard.vue'
import Tasks from 'components/Task/Tasks.vue'
import TaskDetails from 'components/Task/Details.vue'
import ErrorNotFound from 'components/errors/NotFound.vue'

Vue.use(Router)

var router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard
		},
		{
			path: '/tasks',
			component: Tasks,
			children: [
				{
					path: '',
					name: 'tasks',
					component: {
						template: '<h2>Por favor selecciona una tarea</h2>'
					}
				},
				{
					path: ':id',
					name: 'task.details',
					component: TaskDetails,
					props: true
				}
			]
		},
		{
			path: '/404',
			component: ErrorNotFound
		},
		{
			path: '*',
			redirect: '/404'
		}
	]
})

export default router