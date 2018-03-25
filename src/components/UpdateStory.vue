<template>
    <div class="the-root">
        <Header></Header>
        <div class="container-fluid edit-story-container">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Update Your User Story With ID {{ $route.params.storyId }}</h1>
                        <div v-if="fbError" class="alert alert-danger" role="alert">
                                {{fbErrorMsg}}
                        </div>
                        <form @submit.prevent="updateStory">
                            
                            <div class="form-row">
                                <div class="form-goup col-xs-12 col-md-4">
                                    <label class="col-form-label col-form-label-lg">As a<small>*</small> </label> 
                                    <input class="form-control input-lg" placeholder="Who" name="who" type="text" v-model="storyUserOwned.who" v-validate="'required'" :class="{'input': true, 'is-error': errors.has('who')}" />
                                    <p v-show="errors.has('who')" class="badge badge-danger">{{ errors.first('who') }}</p>
                                </div>
                                <div class="form-goup col-xs-12 col-md-4">
                                    <label class="col-form-label col-form-label-lg">I'd like to<small>*</small> </label> 
                                    <input class="form-control input-lg" placeholder="What" name="what" type="text" v-model="storyUserOwned.what" v-validate="'required'" :class="{'input': true, 'is-error': errors.has('what')}" />
                                    <p v-show="errors.has('what')" class="badge badge-danger">{{ errors.first('what') }}</p>
                                </div>
                                <div class="form-goup col-xs-12 col-md-4">
                                    <label class="col-form-label col-form-label-lg">so that<small>*</small> </label> 
                                    <input class="form-control input-lg" placeholder="Why" name="why" type="text" v-model="storyUserOwned.why"  v-validate="'required'" :class="{'input': true, 'is-error': errors.has('why')}">
                                    <p v-show="errors.has('why')" class="badge badge-danger">{{ errors.first('why') }}</p>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-xs-12 col-md-6">
                                    <label class="col-form-label-sm">Story Points:</label> 
                                    <input class="form-control form-control-sm" placeholder="Story Points" name="story_points" type="number" v-model="storyUserOwned.storyPoints">
                                </div>
                                <div class="form-group col-xs-12 col-md-6">
                                    <label class="col-form-label-sm">Business Value:</label> 
                                    <input class="form-control form-control-sm" placeholder="Business Value" name="business_value" type="number" v-model="storyUserOwned.businessValue">
                                </div>
                            </div>
                            <div class="acceptance-criterias-block form-row">
                                <label class="form-label">Acceptance Criterias: </label>
                                <textarea class="form-control" rows="10" placeholder="Enter Acceptance Criteria in Markdown here"   v-model="storyUserOwned.acceptance_criteria" name="acceptance_criteria"  />
                            </div>
                            <div class="text-right">
                                <input class="btn btn-primary text-right" type="submit" value="Save User Story" />
                            </div>
                        </form>
                    </div>
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

/**
 * @todo: Form Validation - DONE
 * @todo: business points and value - DONE
 * */

export default {
  name: 'UpdateStory',
  components: {
      UserStoryUpdateForm,
      Header
  },
  data () {
      return {
          storyId: null,
          user: {},
          story: {},
          storyUserOwned: {},
          fbError: false,
          fbErrorMsg: ''
      }
  },
  methods: {
      updateStory: function(){
        this.$validator.validateAll().then((result) => {
            if (result) {
                console.log("Story User Owned", this.storyUserOwned)
                let theStory = this.storyUserOwned
                console.log("KEY", this.storyUserOwned['.key'])
                let theKey = this.storyUserOwned['.key']
                delete theStory['.key']
                //Workaround for firebase key error
                console.log("USER", this.user.uid)
                storiesUserOwnedRef.child(this.user.uid).child(theKey).update(theStory)

                // Reset Validation
                this.$nextTick().then(() => {
                    this.$validator.reset()
                    this.errors.clear();
                    this.fbError = false
                    this.fbErrorMsg = ''

                }) 

                this.$router.push({path: '/stories'})
            }
            else {
                 console.log("NOT VALID") //@todo: Emit error message in UI from form validation in create form
                this.fbErrorMsg = "The form is not valid! Please correct the errors!"
                this.fbError = true
            }
        })
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

