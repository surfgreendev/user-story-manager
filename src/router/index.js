import Vue from 'vue'
import Router from 'vue-router'
import ListStories from '@/components/ListStories'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListStories',
      component: ListStories
    }
  ]
})
