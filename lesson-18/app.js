Vue.component('app-icon', {
    template: '<i :class="cssClasses"></i>',
    props: ['img'],
    computed: {
        cssClasses: function(){
            return 'fas fa-' + this.img;
        }
    }
});

Vue.component('app-task', {
    template: '#task-template',
    props: ['tasks', 'task', 'index'],
    methods:{
        toogleStatus: function(){
            this.task.pending = !this.task.pending;
        },
        edit: function(){
            this.tasks.forEach(function(task){
                task.editing = false;
            });

            this.draft = this.task.description;

            this.task.editing = true;
        },
        update: function(){
            this.task.description = this.draft;
            this.task.editing = false;
        },
        discard: function(){
            this.task.editing = false;
        },
        remove: function(){
            this.tasks.splice(this.index, 1);
        }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        new_task: '',
        draft: '',
        tasks: [
            {
                description: 'Aprender Vue.js',
                pending: true,
                editing: false
            },
            {
                description: 'Suscribirse a Styde.net',
                pending: true,
                editing: false
            },
            {
                description: 'Crear una API',
                pending: false,
                editing: false
            }
        ]
    },
    methods: {
        createTask: function(){
            this.tasks.push({
                description: this.new_task,
                pending: true,
                editing: false
            });

            this.new_task = '';
        },
        deleteCompleted: function(){
            this.tasks = this.tasks.filter(function(task){
                return task.pending;
            });
        }
    }
});