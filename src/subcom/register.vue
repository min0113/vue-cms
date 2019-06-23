<template>
    <div>
        <h1> 这是注册组件 {{ message  }}</h1>

    </div>
</template>

<script>
    export  default {
        data () {
            return {
                message:'hello register'
            }
        }
    }
</script>

<style scoped>

    h1{
        color: #2187e7;
    }
    </style>