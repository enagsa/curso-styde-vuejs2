<template>
	<i class="icon" :class="cssClasses"></i>
</template>

<script>
export default {
    props: ['img'],
    computed: {
        cssClasses(){
            return 'glyphicon glyphicon-' + this.img;
        }
    }
}
</script>

<style lang="scss">
	
</style>