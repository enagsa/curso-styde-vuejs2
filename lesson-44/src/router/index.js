import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'components/Dashboard.vue'
import TaskList from 'components/Task/List.vue'
import TaskDetails from 'components/Task/Details.vue'
import TaskCreate from 'components/Task/Create.vue'
import TaskEdit from 'components/Task/Edit.vue'
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
			component: TaskList,
			children: [
				{
					path: '',
					name: 'tasks',
					component: {
						template: '<h2>Por favor selecciona una tarea</h2>'
					}
				},
				{
					path: 'create',
					name: 'task.create',
					component: TaskCreate
				},
				{
					path: ':id',
					name: 'task.details',
					component: TaskDetails,
					props: true
				},
				{
					path: ':id/edit',
					name: 'task.edit',
					component: TaskEdit,
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