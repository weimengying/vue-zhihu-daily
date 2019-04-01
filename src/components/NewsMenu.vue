<template>
 <!-- 新闻详情底部菜单组件-->
    <div class="news-menu">
      <ul class="menu-wrap">
        <li class="menu-item" @click="goBack">
          <i class="icon iconfont icon-back"></i>
        </li>
        <li class="menu-item" @click="goNext">
          <i class="icon iconfont icon-moreunfold"></i>
        </li>
        <li class="menu-item" @click="thumbUp" :class="{'dianzan-active':isDianzan}">
          <i class="icon iconfont icon-dianzan"></i>
          <span class="dianzan-number">{{this.$store.state.popularity}}</span>
        </li>
        <li class="menu-item" @click="showMenu">
          <i class="icon iconfont icon-fenxiang"></i>
        </li>
        <li class="menu-item" @click="showComment">
          <i class="icon iconfont icon-pinglun"></i>
          <span class="comments-number">{{this.$store.state.comments}}</span>
        </li>
      </ul>
      <mt-popup
        v-model="popupVisible" pop-transition="popup-fade"
        position="bottom">
        <!--新闻详情分享弹框组件-->
        <Share @cancel="hideMenu"></Share>
      </mt-popup>
    </div>
</template>
<script>
  import router from '../router'
  import axios from 'axios'
  import Share from './Share.vue'
    export default {
        /*
     * 自身数据,一定要一个function
     */
        data(){
            return {
              isDianzan:false,//是否已点赞
              popupVisible:false //分享组件是否展示
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
            this. fetchStoryExtra();
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
          //获取新闻额外信息
          fetchStoryExtra:function(){
            axios.get('api/story-extra/'+this.$store.state.id)
              .then(response=>{
                console.log(response)
                this.$store.state.long_comments=response.data.long_comments;//长评论数
                this.$store.state.short_comments=response.data.short_comments;//短评论数
                this.$store.state.popularity=response.data.popularity;//点赞数
                this.$store.state.comments=response.data.comments;//评论数

              })
              .catch(error=>{
                console.log(error)
              })

          },
          //返回上一页事件
          goBack:function(){
            let type=this.$store.state.newsType;
            if(type===0){
              router.push({name:'index'});
            }else if(type===1){
              let currentThemeId = this.$store.state.currentThemeId;
              router.push({ name: 'themeDetail', params: { id: currentThemeId } });
            }else if (type === 2){
              router.push({name : 'collect'});
            }
          },
          // 载入下一篇新闻点击事件
          goNext: function() {
            router.push({ name: 'newsDetail', params: { id: this.$store.state.nextId } });
          },
          // 刷新路由属性中的id，重载页面
          reloadId: function() {
            this.$emit('reloadId');
            this.fetchStoryExtra();
          },
          //点赞事件
          thumbUp:function(){
            if(!this.isDianzan){
              this.$store.state.popularity++;

            }else{
              this.$store.state.popularity--;
            }
            this.isDianzan=!this.isDianzan;

          },
          //查看评论页面
          showComment:function(){
            router.push({name:'comment',params:{id:this.$store.state.id} })

          },
          //展示分享组件
          showMenu:function(){
            this.popupVisible=true;
          },
          //隐藏分享组件
          hideMenu:function(){
            this.popupVisible=false;
          }

        },
        /**
         * 组件
         */
        components : {
          Share //新闻详情分享弹框组件
        }

    }

</script>
<style lang="sass">
  @import '../assets/sass/components/NewsMenu.sass'

</style>
