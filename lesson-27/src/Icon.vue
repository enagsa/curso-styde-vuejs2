<template>
	<i class="icon" :class="cssClasses"></i>
</template>

<script>
export default {
    props: ['img'],
    computed: {
        cssClasses(){
            return 'fas fa-' + this.img;
        }
    }
}
</script>

<style>
	.icon{ display: inline-block; width: 20px; text-align: center; }
</style>