<template>
    <div>ThemeDetail主题</div>
</template>
<script>
    export default {
        /*
     * 自身数据,一定要一个function
     */
        data(){
            return {
                a : 1,
                b : 2
            }
        },
        /**
         * 计算属性
         */
        computed : {},

        /**
         * 监听属性变动
         */
        watch : {},
        /**
         * 过滤器
         */
        filters : {},
        /**
         * 生命周期钩子
         */

        beforeCreate(){

        },
        created(){
            console.log("groupCountDown-> created:")
        },

        beforeMount(){

        },
        mounted(){
            console.log("groupCountDown=>mounted")

        },
        beforeUpdate(){

        },
        updated(){
            console.log("groupCountDown=>updated")
        },
        beforeDestroy(){

        },
        destroy(){

        },
        /**
         * 自定义方法
         */
        methods : {},
        /**
         * 组件
         */
        components : {}

    }

</script>
<style>

</style>
