import Vue from 'vue'
import Router from 'vue-router'
import ListStories from '@/components/ListStories'
import UpdateStory from '@/components/UpdateStory'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/signin'
    },
    {
      path: '/',
      redirect: '/signin'
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

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('signin')
  else if (!requiresAuth && currentUser) next('stories')
  else next()
})

export default router