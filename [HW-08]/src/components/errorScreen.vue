<template>
    <err></err>
</template>
<script>
    import errorScreen from'@/components/errorScreen.vue'
    export default {
        name: 'error',
        props: {
            msg: String
        }
        components:{
            err:errorScreen
        }
    }
</script>
