<template>
  <!--编写评论页面-->
    <div class="write-comment">
      <div class="header">
        <i class="icon iconfont icon-back" @click="backToComment"></i>
        <span class="header-text">写点评</span>
        <span class="header-release" @click="release">发布</span>
      </div>
      <div class="warning-text">
        不友善言论，深度讨论会被优先展示
      </div>
    </div>
</template>
<script>
  import router from '../router'
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
        methods : {
          //返回评论
          backToComment(){
            router.go(-1);

          },
          //发布评论
          release(){
            alert('发布评论')
          }
        },
        /**
         * 组件
         */
        components : {}

    }

</script>
<style lang="sass">
  @import '../assets/sass/pages/WriteComment.sass'

</style>
