import Vue from 'vue'
import Router from 'vue-router'
import ListStories from '@/components/ListStories'
import UpdateStory from '@/components/UpdateStory'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import Home from '@/components/Home'
import ListProject from '@/components/Projects/ListProject'
import CreateProject from '@/components/Projects/CreateProject'
import UpdateProject from '@/components/Projects/UpdateProject'


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
      name: 'Home',
      component: Home
    },
    {
      path: '/stories/:backlogId',
      name: 'ListStories',
      component: ListStories,
      props: true,
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
    },
    //Projects
    {
      path: '/backlogs/create',
      name: 'CreateProject',
      component: CreateProject,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/backlogs',
      name: 'ListProject',
      component: ListProject,
      props: true,
      meta: {
        requiresAuth: true
      }
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