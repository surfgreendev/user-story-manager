<template>
    <div class="container update-story-container">
        <Header></Header>
        <h1>fsdaf{{this.storyUserOwned}}</h1>
        <div class="container grid-lg">
            <div class="columns">
                <div class="column col-12">
                    <h1> Update Your User Story With ID {{ $route.params.storyId }}</h1>
                    <!--<UserStoryUpdateForm pwho="TEST WHO" pwhy="TEST WHY" pwhat="mfsanflkdsn" pacceptance_criteria="FDSAFK"></UserStoryUpdateForm>-->
                    <form @submit.prevent="updateStory">
                        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                            <p class="alert" v-if="errors.has('who')">{{errors.first('who')}}</p>
                        </transition>
                        <div class="columns">
                        
                            <div class="column col-xs-12">
                                <label class="form-label label-lg">As a </label> <input class="form-input input-lg"  v-model="storyUserOwned.who" name="who" type="text"  >
                            </div>
                            <div class="column col-xs-12">
                                <label class="form-label label-lg">I'd like to </label> <input class="form-input input-lg"   v-model="storyUserOwned.what" placeholder="What" name="what" type="text" >
                            </div>
                            <div class="column col-xs-12">
                                <label class="form-label label-lg">so that </label> <input class="form-input input-lg"  v-model="storyUserOwned.why" placeholder="Why" name="why" type="text" >
                            </div>
                        </div>
                        
                        <div class="acceptance-criterias-block form-group">
                            <label class="form-label">Acceptance Criterias: </label>
                            <textarea class="form-input" rows="10" placeholder="Enter Acceptance Criteria in Markdown here"   v-model="storyUserOwned.acceptance_criteria" name="acceptance_criteria"  />
                        </div>
                        <div class="text-right">
                            <input class="btn btn-primary text-right" type="submit" value="Save User Story" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserStoryUpdateForm from './UserStoryUpdateForm'
import firebase from 'firebase'
import {firebaseApp} from '../db'
import Header from './Header'

let db = firebaseApp.database()
let storiesRef = db.ref('stories')
let storiesUserOwnedRef = db.ref('storiesUserOwned/')

export default {
  name: 'UpdateStory',
  components: {
      UserStoryUpdateForm,
      Header
  },
  /*firebase() {
      
      return {
        storyUserOwned: {
            source: storiesUserOwnedRef.child(this.user.uid).child(this.storyId),
            asObject: true
        },
        story: {
            source: storiesRef.child(this.storyId),
            asObject: true
        }
      }
  },*/
  /*
  firebase: {
      storyUserOwned: {
            source: storiesUserOwnedRef.child(this.user.uid).child(this.storyId),
            asObject: true
        },
        story: {
            source: storiesRef.child(this.storyId),
            asObject: true
        }
  },*/
 
  data () {
      return {
          storyId: null,
          who: '',
          what: '',
          why: '',
          acceptance_criteria: '', 
          user: {},
          story: {},
          storyUserOwned: {}
      }
  },
  methods: {
      updateStory: function(){
        console.log("UPDATE STORY", this.who, this.what, this.why, this.user)
        
        
        //let storiesRef = storiesUserOwnedRef.child(this.user.uid).child(storyId)
        console.log("Story User Owned", this.storyUserOwned)
        let theStory = this.storyUserOwned
        console.log("KEY", this.storyUserOwned['.key'])
        let theKey = this.storyUserOwned['.key']
        delete theStory['.key']
        //Workaround for firebase key error
        //delete this.storiesUserOwned['.key']
        console.log("USER", this.user.uid)
        //console.log("Story User Owned", this.storyUserOwned)
        storiesUserOwnedRef.child(this.user.uid).child(theKey).update(theStory)
        //Set who, what, why, acc_criteria, story points, business value
        //console.log("STORIES REF", this.storyUserOwned)

        this.$router.push({path: '/stories'})
      }
  },
  mounted: function() {
      
      console.log("MOUNTED", this.$route.params)
      console.log("STORY ID IN MOUNTED", this.$route.params.storyId)
      this.storyId = this.$route.params.storyId
      //console.log("USER IN MOUNTED", this.user.uid)
  },
  created: function(storyId) {
      
  },
  beforeCreate: function() {
      this.storyId = this.$route.params.storyId
      firebase.auth().onAuthStateChanged((user) => {
          console.log("USer", user)
          if (user){
              this.user = user
              console.log("THE USER", user)
              console.log("THE ID", this.$route.params.storyId)
              /* Get the db object here as it's not working otherwise with firebase( return {}) as route and user are not there*/
              this.$bindAsObject('storyUserOwned', storiesUserOwnedRef.child(user.uid).child(this.$route.params.storyId))
          }
          else {
              console.log("Error USer not Sigend in")
          }
      })
  }
}
</script>

