<template>
    <div class="index">
      <!--<Welcome></Welcome>-->
      <Sidebar v-if="isShowSidebar" v-on:hideSidebar="toggleSidebar"></Sidebar>
      <mt-loadmore :top-method="loadTop" :topDistance="40" ref="loadmore">
        <header>
          <i class="icon iconfont icon-fenlei" @click="toggleSidebar"></i>
          <span class="hot-news">今日新闻</span>
        </header>
        <Swipe></Swipe>
        <NewsList ref="newsList"></NewsList>
      </mt-loadmore>
    </div>
</template>
<script>
  import Welcome from '../components/Welcome'
  import Swipe from '../components/Swipe.vue'
  import Sidebar from '../components/Sidebar.vue'
  import NewsList from '../components/NewsList.vue'
  //import 'scrolling-element';
  export default {
        /*
     * 自身数据,一定要一个function
     */
        data(){
            return {
              isShowSidebar:false
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
           this.isShowSidebar = false
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

          toggleSidebar(){
            //侧边栏显示时设置底部列表不能滑动
            let scrollTop;
            if(!this.isShowSidebar){ //禁止滑动
              scrollTop = document.scrollingElement.scrollTop;
              document.body.style.position = 'fixed';
              document.body.style.top = -scrollTop + 'px';
            } else { // 取消滑动限制
              document.body.style.position = '';
              document.scrollingElement.scrollTop = scrollTop;
            }
            this.isShowSidebar = !this.isShowSidebar;
          },
          // 下拉刷新数据
          loadTop() {
            this.$refs.newsList.$emit('refresh');
            this.$refs.loadmore.onTopLoaded();
          }
        },
        /**
         * 组件
         */
        components : {
          Welcome,
          Swipe,
          Sidebar,
          NewsList

        }

    }

</script>
<style lang="sass">
  .index
    header
      position: fixed
      width: 100%
      height: 32px
      z-index: 2
      font-size: 22px
      color: #fff
      line-height: 32px
      .icon-fenlei
        height: 100%
        font-size: 26px
        padding: 0 15px
      .hot-news
        position: absolute
        width: 88px
        height: 100%
        left: 50%
        top: 0
        margin-left: -44px



</style>
