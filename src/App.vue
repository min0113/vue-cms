<template>
 <div>
     <h1> 这是 APP 组件</h1>

     <mt-button type="primary" > primary</mt-button>
     <mt-button size="small" type="danger">small</mt-button>
     <button type="button" class="mui-btn mui-btn-royal">
         紫色
     </button>




     <router-link to="/account">
         <mt-button plain>account</mt-button>
     </router-link>
     <router-link to="/goodslist">
         <mt-button icon="back">goodslist</mt-button>
     </router-link>
     <router-view></router-view>

 </div>



</template>

<script>

    import { Toast } from 'mint-ui';


    export  default {

        data () {
            return{
                toastInstanse:null
            }
        },

        created (){
            this.getList()
        },
        methods:{
            getList() {
                this.show()

                setTimeout(() =>{
                    this.toastInstanse.close()
                },3000)
            },
            show () {
                this.toastInstanse =  Toast({
                    message:"提示",
                    position:'top',
                    duration:-1,
                    iconClass:'glyphicon glyphicon-time',
                    className:'my-icon'

                })
            }
        }
    }



</script>

<style>

    .my-icon>i{
        color: #2AC845;
    }

</style>