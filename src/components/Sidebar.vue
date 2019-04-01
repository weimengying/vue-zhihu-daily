<template>
    <transition name="move">
      <div class="wrap">
        <div class="sidebar">
          <div class="top">
            <img src="../assets/images/avatar.png" alt="" class="avatar">
            <span class="name">魏孟营</span>
          </div>
          <div class="menubar">
            <div @click="goCollect">
              <i class="icon iconfont icon-shoucang"></i><br>
              <span>收藏</span>
            </div>
            <div>
              <i class="icon iconfont icon-xiaoxi"></i><br>
              <span>消息</span>
            </div>
            <div>
              <i class="icon iconfont icon-shezhi"></i><br>
              <span>设置</span>
            </div>
          </div>
          <div class="menu-wrapper" ref="menuWrapper">
            <ul>
              <li class="menu-item" v-for="item in data" :key="item.id" @click="themeDetail(item.id)">
                <i class="icon iconfont icon-shouyeshouye" v-if="item.id===-1"></i>
                {{item.name}}
                <i class="icon iconfont icon-more"></i>
              </li>

            </ul>
          </div>
          <div class="foot-menu">
            <i class="icon iconfont icon-lixianwenjian">&nbsp;&nbsp;离线</i>
            <i class="icon iconfont icon-yejianmoshi">&nbsp;&nbsp;夜间</i>
          </div>
        </div>
        <div class="mask" @click="hideSidebar"></div>
      </div>
    </transition>
</template>
<script>
  import axiox from 'axios'
  import router from '../router'
  import BScroll from 'better-scroll'
  export default {
        /*
     * 自身数据,一定要一个function
     */
        data(){
            return {
               data:[]
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
            this.fetchData();
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
          // 隐藏侧边栏
          hideSidebar() {
            this.$emit('hideSidebar');
          },
          //获取路由参数上的id的新闻具体内容
          fetchData:function(){
            axiox.get('api/themes')
              .then(response=>{
                this.data=response.data.others;
                console.log(response.data.others)

                this.data.unshift({
                  color:0,
                  thumbnail:'',
                  description:'首页',
                  id:-1,
                  name:'首页'
                });

                this.$nextTick(()=>{
                  this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                    click: true
                  });
                })
              })
              .catch(error=>{
                console.log(error)
              })
          },
          //跳转主题详情页
          themeDetail(id){
            if(id===-1){ //首页
              this.hideSidebar()
            }else{ //不是首页
              this.$store.dispatch('changeCurrentThemeId',id);
              router.push({name:'themeDetail',params:{id:id} });
            }

          },
          // 跳转收藏页
          goCollect(){
            router.push({name: 'collect'})

          }
        },
        /**
         * 组件
         */
        components : {}

  }

</script>
<style lang="sass">
  @import '../../src/assets/sass/components/Sidebar.sass'

</style>
