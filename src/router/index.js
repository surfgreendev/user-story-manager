import Vue from 'vue'
import Router from 'vue-router'
import ListStories from '@/components/ListStories'
import UpdateStory from '@/components/UpdateStory'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stories',
      name: 'ListStories',
      component: ListStories
    },
    {
      path: '/edit/:storyId',
      name: 'UpdateStory',
      component: UpdateStory,
      props: true
    },
    {
      path: '/signup',
      name: 'SignUp', 
      component: SignUp
    }
  ]
})
