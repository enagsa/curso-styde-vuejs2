<template>
	<i :class="cssClasses"></i>
</template>

<script>
export default {
    props: ['img'],
    computed: {
        cssClasses: function(){
            return 'fas fa-' + this.img;
        }
    }
}
</script>