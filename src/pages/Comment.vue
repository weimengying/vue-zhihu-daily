<template>
  <!-- 评论页面-->
    <div class="comment">
      <div class="head">{{this.$store.state.comments}}条点评</div>
      <!-- 长评组件-->
      <long-comment></long-comment>
      <!-- 短评组件-->
      <short-comment></short-comment>
      <div class="foot">
        <i class="icon iconfont icon-back" @click="backToDetail"></i>
        <i class="icon iconfont icon-bianxie" @click="writeComment">写评论</i>
      </div>

    </div>
</template>
<script>
  import router from '../router'
  import LongComment from '../components/LongComment.vue'
  import ShortComment from '../components/ShortComment.vue'
    export default {
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
          //返回文章详情
          backToDetail(){
            router.go(-1);
          },
          //写点评
          writeComment(){
            router.push({name:'writeComment',params:{id:this.$store.state.id} });
          }
        },
        /**
         * 组件
         */
        components : {
          'long-comment':LongComment,
          'short-comment':ShortComment
        }

    }

</script>
<style lang="sass">
  @import "../assets/sass/pages/Comment.sass";

</style>
