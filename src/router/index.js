import Vue from 'vue'
import Router from 'vue-router'
import ListStories from '@/components/ListStories'
import UpdateStory from '@/components/UpdateStory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListStories',
      component: ListStories
    },
    {
      path: '/edit/:storyId',
      name: 'UpdateStory',
      component: UpdateStory
    }
  ]
})
