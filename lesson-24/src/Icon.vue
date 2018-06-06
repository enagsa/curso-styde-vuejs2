<template>
	<i :class="cssClasses"></i>
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