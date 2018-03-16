<template>
    <div class="the-root">
        <Header></Header>
        <div class="container add-story-container">
            <div class="container grid-lg">
                <div class="columns">
                    <div class="column col-12">
                        <form @submit.prevent="addStory">
                            <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                                <p class="alert" v-if="errors.has('who')">{{errors.first('who')}}</p>
                            </transition>
                            <div class="columns">
                                <div class="column col-xs-12">
                                    <label class="form-label label-lg">As a </label> <input class="form-input input-lg" placeholder="Who" name="who" type="text" v-model="who" v-validate="'min:2'">
                                </div>
                                <div class="column col-xs-12">
                                    <label class="form-label label-lg">I'd like to </label> <input class="form-input input-lg" placeholder="What" name="what" type="text" v-model="what">
                                </div>
                                <div class="column col-xs-12">
                                    <label class="form-label label-lg">so that </label> <input class="form-input input-lg" placeholder="Why" name="why" type="text" v-model="why">
                                </div>
                            </div>
                           
                            <div class="acceptance-criterias-block form-group">
                                <label class="form-label">Acceptance Criterias: </label>
                                <textarea class="form-input" rows="10" placeholder="Enter Acceptance Criteria in Markdown here" name="acceptance_criteria" v-model="acceptance_criteria" />
                            </div>
                            <div class="text-right">
                                <input class="btn btn-primary text-right" type="submit" value="Create User Story" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="container grid-lg story-list">
            <div class="columns">
                <div class="column col-12">
                    <h1>You have {{this.dbStoriesUserOwnedListing.length}} Stories in your backlog</h1>
                    <p>{{dbStoriesUserOwnedListing}}</p>
                    <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceInDown">
                        <div class="card" v-for="(story, index) in this.dbStoriesUserOwnedListing" :key='index'> 
                            <div class="card-header">
                                <div class="card-title h5"><small>id: {{story['.key']}} | votes: {{story.votes}}</small></div>
                                <div class="card-subtitle text-gray">created by {{story.userName}} on {{new Date(story.created_on)}}</div>
                            </div>
                            <div class="card-body">
                                <p>As a {{story.who}} I'd like to {{story.what}}, so that {{story.why}}</p>
                                <p v-if="!story.show_ac"><vue-markdown>{{story.acceptance_criteria}}</vue-markdown></p>
                            </div>
                            <div class="card-footer">
                                <div class="text-right">
                                    <ul class="list-inline">
                                        <li><button v-on:click="toggleAcceptanceCriteria(story)" class="btn btn-default btn-sm"><i v-if="!story.show_ac" class="icon icon-arrow-up"></i> <i v-if="story.show_ac" class="icon icon-arrow-down"></i>Acceptance Criteria</button></li>
                                        <li>  <router-link :to="{ name: 'UpdateStory', params: { storyId: index }}"><i class="icon icon-edit"></i></router-link></li>
                                        <li><i v-on:click="removeStory(story)" class="icon icon-delete"></i></li>
                                        <li>|</li>
                                        <li><span v-on:click="voteStory(story['.key'], true)"><i class="icon icon-upward"></i> <small>Upvote</small></span></li>
                                       <li><span v-on:click="voteStory(story['.key'], false)"><i class="icon icon-downward"></i> <small>Downvote</small></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Header from './Header'
import firebase from 'firebase'
import {firebaseApp} from '../db'

let db = firebaseApp.database()

/*
@todo: NEXT 
* Show Story Count - DONE
* Save user name when story is added - DONE
* Show creation date - DONE - BUT DO IT WITH 4 minutes ago, etc.
* Show the id of the storiy - DONE
* Update view - Really Update the data
* Filter, Search and sort data

* Add Tags to stories
* Make stories exportable as json/csv

* Rating for stories upvote/downvote -> DONE
* Set UpVote/DownVote per story so that a user can only upvote or downvote once
* Setup the security roles for the votes
* Story Points for stories

* If user id does not exist - block add buttons and icons with v-if

*/

// Firebase References
let storiesRef = db.ref('stories')
let storiesUserOwnedRef = db.ref('storiesUserOwned/')

export default {
  name: 'ListStories',
  components: {
      VueMarkdown,
      Header
  },
  firebase() {
      const loggedInUserUid = firebase.auth().currentUser.uid
      return {
          dbStoriesUserOwnedListing: db.ref('storiesUserOwned/' + loggedInUserUid),
      }
  },
  data() {
      return {
          who: '',
          what: '',
          why: '',
          acceptance_criteria: '',
          stories: [
              {who: "Product Manager", what: "do sth", why: "So that ...", acceptance_criteria: "nope", show_ac: "false"},
              {who: "Consultsnt", what: "do sth", why: "So that ...", acceptance_criteria: "nope", show_ac: "false"}
            ],
          user: {}
      }
  },
  methods: {
    voteStory: function(storyId, isUpVote) {

        let storyToUpvoteRef = storiesUserOwnedRef.child(this.user.uid).child(storyId).child("votes")

        if (isUpVote) {
            // Add one vote
            // Get item from firebase and increment the votes
            storyToUpvoteRef.transaction(function(currentVotes){
                
                console.log("CURRENT VOTES", currentVotes)
                let newValue = currentVotes + 1
                return newValue
            })
        }
        else {
            // Downvote
            storyToUpvoteRef.transaction(function(currentVotes){
                
                console.log("CURRENT VOTES", currentVotes)
                let newValue = currentVotes - 1
                return newValue
            })
        }
        
    },
    addStory: function() {
          this.$validator.validateAll().then((result) => {
              if (result) {
                    let the_date =  Date.now()
                    let _uid = firebase.auth().currentUser.uid;

                    // create the story object 
                    let story = {
                            userId: _uid,
                            userName: this.user.displayName,
                            who: this.who, 
                            what: this.what, 
                            why: this.why, 
                            acceptance_criteria: this.acceptance_criteria, 
                            show_ac: true,
                            votes: 0,
                            created_on: the_date
                    }

                    // Get a <storyuid>
                    let newStoryRef = storiesRef.push()

                    // Store stories to root/stories
                    newStoryRef.set(story)

                    // Set up the structure of root/storiesUserOwned/<uid>/<storyuid>/
                    let uid_child = storiesUserOwnedRef.child(_uid)
                    let uid_child_new_story_child = uid_child.child(newStoryRef.key)
                    uid_child_new_story_child.set(story)
                    
                    // Clean up the forms
                    this.who = '';
                    this.what = '';
                    this.why = '';
                    this.acceptance_criteria = '';
                    
              } else {
                    console.log("NOT VALID") //@todo: Emit error message in UI from form validation in create form
              }
          });
    },
    deleteStory: function(i) {
        /* obsolete function, can be removed */
        console.log("DELETE CLICKED")
        this.stories.splice(i, 1);
    },
    removeStory: function(story) {
        storiesRef.child(story['.key']).remove()
        storiesUserOwnedRef.child(this.user.uid).child(story['.key']).remove()
    },
    toggleAcceptanceCriteria: function(story) {
        console.log("AC CLICKED")
        story.show_ac = !story.show_ac;
    },
  },
  beforeCreate: function() {
      firebase.auth().onAuthStateChanged((user) => {
          console.log("USER", user)
          if (user) {
              this.user = user
          }
          else {
              console.log("ERROR USER NOT SIGNED IN")
          }
      })
  }
}
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";

.add-story-container {
    background-color: aliceblue;
    padding-top: 35px;
    padding-bottom: 35px;
}

.story-list {
    margin-top: 20px;
}
</style>
