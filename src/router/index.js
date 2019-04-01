import Vue from 'vue'
import Router from 'vue-router'


import Index from '../pages/Index.vue'
import NewsDetail from '../pages/NewsDetail.vue'
import Comment from '../pages/Comment.vue'
import Collect from '../pages/Collect.vue'
import WriteComment from '../pages/WriteComment.vue'
import ThemeDetail from '../pages/ThemeDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/newsDetail/:id', //新闻详情
      name: 'newsDetail',
      component: NewsDetail
    },
    {
      path:'/comment/:id', //评论页面
      name:'comment',
      component:Comment
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    },
    {
      path:'/writeComment/:id', //编写评论页面
      name:'writeComment',
      component:WriteComment
    },
    {
      path:'/themeDetail/:id', //
      name:'themeDetail',
      component:ThemeDetail
    }
  ]
})
