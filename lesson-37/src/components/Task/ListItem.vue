<template>
	<li @click="select" class="list-group-item task-list-item" :class="{completed: !task.pending}">
        <a @click.prevent.stop="toogleStatus" href="#">
            <app-icon :img="task.pending ? 'unchecked' : 'check'"></app-icon>
        </a>
        <span class="description">{{ task.title }}</span>
    </li>
</template>

<script>
import Icon from 'components/Icon.vue';

export default {
	components: {
		'app-icon': Icon
	},
    data(){
        return {
            draft: ''
        };
    },
    template: '#task-template',
    props: ['task', 'index'],
    methods:{
        toogleStatus(){
            this.task.pending = !this.task.pending;
        },
        select(){
            this.$router.push('/tasks/' + this.task.id);
        }
    }
}
</script>

<style lang="scss">
    .list-group-item.task-list-item {
        display: flex;
        justify-content: space-between;

        a {
            text-decoration: none;
        }

        .description {
            flex: 1;
            padding: 0 5px;
        }

        &.completed{
            &, a{
                color: #999;
            }

            .description {
                text-decoration: line-through;
            }
        }
    }    
</style>