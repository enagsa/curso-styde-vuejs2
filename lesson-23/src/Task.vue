<template>
	<li class="list-group-item" :class="{editing: editing, completed: !task.pending}">
        <a @click.prevent="toogleStatus" href="#">
            <app-icon :img="task.pending ? 'square' : 'check-square'"></app-icon>
        </a>
        <template v-if="!editing">
            <span class="description">{{ task.description }}</span>
            <div>
                <a @click.prevent="edit" href="#">
                    <app-icon img="edit"></app-icon>
                </a>
                <a @click.prevent="remove" href="#">
                    <app-icon img="trash-alt"></app-icon>
                </a>
            </div>
        </template>
        <template v-else>
            <input type="text" v-model="draft"/>
            <div>
                <a @click.prevent="update" href="#">                                
                    <app-icon img="check"></app-icon>
                </a>
                <a @click.prevent="discard" href="#">                                
                    <app-icon img="times"></app-icon>
                </a>
            </div>
        </template>                    
    </li>
</template>

<script>
import EventBus from './event-bus.js';
import Icon from './Icon.vue';

export default {
	components: {
		'app-icon': Icon
	},
    data: function(){
        return {
            editing: false,
            draft: ''
        };
    },
    template: '#task-template',
    props: ['task', 'index'],
    created: function(){
        EventBus.$on('editing', function(index){
            if(this.index != index){
                this.discard();
            }
        }.bind(this));
    },
    methods:{
        toogleStatus: function(){
            this.task.pending = !this.task.pending;
        },
        edit: function(){
            EventBus.$emit('editing', this.index);

            this.draft = this.task.description;

            this.editing = true;
        },
        update: function(){
            this.task.description = this.draft;
            this.editing = false;
        },
        discard: function(){
            this.editing = false;
        },
        remove: function(){
            //this.tasks.splice(this.index, 1);
            this.$emit('remove', this.index);
        }
    }
}
</script>