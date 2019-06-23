<template>
    <div>
    <h1> 这是登录组件 {{ message }} </h1>

    </div>

</template>

<script>
    export default {
        data () {
            return {
                message:'hello login'
            }
        }
    }

</script>

<style scoped>
  h1{
      color: #2AC845;
  }

</style>