import Vue from 'vue'
import Router from 'vue-router'
import ListStories from '@/components/ListStories'
import UpdateStory from '@/components/UpdateStory'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/stories',
      name: 'ListStories',
      component: ListStories,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:storyId',
      name: 'UpdateStory',
      component: UpdateStory,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'SignUp', 
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
