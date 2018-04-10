<template>
    <div class="the-root">
        <Header></Header>
        <transition-group name="createForm" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
        <div class="container-fluid add-story-container" v-if="!showFormInput" :key="33223">
            <div class="container">
                <div class="row">
                    <transition name="createSuccess" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                        <div v-if="createSuccess" :key="createSuccessKey" class="alert alert-success alert-dismissible fade show success__message" role="alert">
                            <strong>Success!</strong> You're story has been created successfully!
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </transition>
                    <div class="col-12 text-right">
                        <i v-on:click="toggleFormInput" class="fa fa-times-circle toggle-in-form-icon"></i>
                    </div>
                    <div class="col-12">
                        <div v-if="fbError" class="alert alert-danger" role="alert">
                               {{fbErrorMsg}}
                        </div>
                        <form @submit.prevent="addStory">
                            
                            <div class="form-row">
                                <div class="form-goup col-xs-12 col-md-4">                   
                                        <label class="col-form-label col-form-label-lg">As a<small>*</small> </label> 
                                        <input class="form-control input-lg" placeholder="Who" name="who" type="text" v-model="who" v-validate="'required'" :class="{'input': true, 'is-error': errors.has('who')}" />
                                        <p v-show="errors.has('who')" class="badge badge-danger">{{ errors.first('who') }}</p>                                  
                                </div>
                                <div class="form-goup col-xs-12 col-md-4">                   
                                        <label class="col-form-label col-form-label-lg">I'd like to<small>*</small> </label> 
                                        <input class="form-control input-lg" placeholder="What" name="what" type="text" v-model="what" v-validate="'required'" :class="{'input': true, 'is-error': errors.has('what')}" />
                                        <p v-show="errors.has('what')" class="badge badge-danger">{{ errors.first('what') }}</p>                                  
                                </div>
                                <div class="form-group col-xs-12 col-md-4">
                                        <label class="col-form-label col-form-label-lg">so that<small>*</small> </label> 
                                        <input class="form-control input-lg" placeholder="Why" name="why" type="text" v-model="why"  v-validate="'required'" :class="{'input': true, 'is-error': errors.has('why')}">
                                        <p v-show="errors.has('why')" class="badge badge-danger">{{ errors.first('why') }}</p>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-xs-12 col-md-6">
                                    <label class="col-form-label-sm">Story Points:</label> 
                                    <input class="form-control form-control-sm" placeholder="Story Points" name="story_points" type="number" v-model="storyPoints">
                                </div>
                                <div class="form-group col-xs-12 col-md-6">
                                    <label class="col-form-label-sm">Business Value:</label> 
                                    <input class="form-control form-control-sm" placeholder="Business Value" name="business_value" type="number" v-model="businessValue">
                                </div>
                            </div>
                            <div class="acceptance-criterias-block form-row">
                                <div class="col">
                                    <label class="form-label">Acceptance Criterias: </label>
                                    <textarea class="form-control" rows="7" placeholder="Enter Acceptance Criteria in Markdown here" name="acceptance_criteria" v-model="acceptance_criteria" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col text-right mt-3">
                                    <input class="btn btn-success btn-lg text-right" type="submit" value="Create User Story" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </transition-group>

        <div class="container story-list">
            <div class="row">
                <div class="col-12">
                    <div class="row mb-3">
                        <div class="col-8 col-xs-12">
                            <h2> <i class="fa fa-star"></i> You have {{this.dbStoriesUserOwnedListing.length}} Stories in your backlog</h2>
                        </div>
                        
                        <div v-if="showFormInput" class="col-4 col-xs-12 text-right">
                             <button class="btn btn-success btn-lg" v-on:click="toggleFormInput">Create Story</button>
                        </div>
                    </div>
                    <!--<p>{{dbStoriesUserOwnedListing}}</p>-->
                    <transition-group name="list" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                        <div class="card story-card" v-for="(story, index) in this.dbStoriesUserOwnedListing" :key='index'> 
                            <div class="card-header">
                                <div class="row">
                                    <div class="col-10">
                                        <small>id: {{story['.key']}} | votes: {{story.votes}} | points: {{story.storyPoints}} | value: {{story.businessValue}}</small>
                                    </div>
                                    <div class="col-2 text-right">
                                        <ul class="list-inline">
                                            <li class="text-right"> <router-link :to="{ name: 'UpdateStory', params: { storyId: story['.key'] }}"><i class="fa fa-pencil"></i></router-link></li>
                                            <li class="text-right"><i v-on:click="removeStory(story)" class="rm-story fa fa-trash-o"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <h3>
                                    As a <span v-show="!story.whoEditMode" v-on:click="toogleInlineEdit(story, 'who', index)" class="editable__item">{{story.who}}</span> 
                                    <input class="input__inline" ref='who_edit' type="text" v-model="story.who" v-show="story.whoEditMode" v-on:blur="saveWho(story, 'who')"> 
                                    I'd like to <span v-show="!story.whatEditMode" v-on:click="toogleInlineEdit(story, 'what', index)" class="editable__item">{{story.what}}</span> 
                                    <input class="input__inline" ref='what_edit' type="text" v-model="story.what" v-show="story.whatEditMode" v-on:blur="saveWho(story, 'what')"> 
                                    so that <span v-show="!story.whyEditMode" v-on:click="toogleInlineEdit(story, 'why', index)" class="editable__item">{{story.why}}</span>
                                    <input class="input__inline" ref='why_edit' type="text" v-model="story.why" v-show="story.whyEditMode" v-on:blur="saveWho(story, 'why')"> 
                                </h3>
                                <span v-if="story.inlineUpdateSuccess" class="inline__edit_message--success alert alert-success">Story has been saved!</span>
                                <p v-if="!story.show_ac"><vue-markdown>{{story.acceptance_criteria}}</vue-markdown></p>
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-6">
                                        <span class="text-right"><small class="text-muted">created by {{story.userName}} on {{new Date(story.created_on)}}</small></span>
                                    </div>
                                    <div class="col-6">
                                        <ul class="list-inline text-right">
                                            <li><button v-on:click="toggleAcceptanceCriteria(story)" class="btn btn-outline-secondary btn-sm"><i v-if="!story.show_ac" class="fa fa-minus"></i> <i v-if="story.show_ac" class="fa fa-plus"></i> Acceptance Criteria</button></li>
                                            <li>|</li>
                                            <li><span class="clickable" v-on:click="voteStory(story['.key'], true)"><i class="fa fa-thumbs-up"></i> <small>Upvote</small></span></li>
                                            <li><span class="clickable" v-on:click="voteStory(story['.key'], false)"><i class="fa fa-thumbs-down"></i> <small>Downvote</small></span></li>
                                        </ul>
                                    </div>
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

/** 
@todo: NEXT 
* Show Story Count - DONE
* Save user name when story is added - DONE
* Show creation date - DONE - BUT DO IT WITH 4 minutes ago, etc.
* Show the id of the storiy - DONE
* Update view - Really Update the data - DONE
* Filter, Search and sort data
* Do Backlog Grooming View: 
* @todo: Rearange positions 
* @todo: Inline Editing
* Add Tags to stories
* Make stories exportable as json/csv

* Rating for stories upvote/downvote -> DONE
* Set UpVote/DownVote per story so that a user can only upvote or downvote once
* Setup the security roles for the votes as stated here: https://stackoverflow.com/questions/42276881/increment-firebase-value-from-javascript-subject-to-constraint

* Story Points for stories - DONE

* If user id does not exist - block add buttons and icons with v-if
* Validate Reset with https://github.com/baianat/vee-validate/issues/209 - DONE
* Cursor Styling for icon links in cards
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
          showFormInput: true,
          acceptance_criteria: '',
          stories: [
              {who: "Product Manager", what: "do sth", why: "So that ...", acceptance_criteria: "nope", show_ac: "false"},
              {who: "Consultsnt", what: "do sth", why: "So that ...", acceptance_criteria: "nope", show_ac: "false"}
            ],
          user: {},
          fbError: false,
          fbErrorMsg: '',
          businessValue: 0,
          storyPoints: 0,
          createSuccess: false,
          lastCreatedStory: {}
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
        // @todo: validation does not work correctly


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
                            businessValue: this.businessValue,
                            storyPoints: this.storyPoints,
                            hasUpVoted: false,
                            hasDownVoted: false,
                            whoEditMode: false,
                            whatEditMode: false,
                            whyEditMode: false,
                            inlineUpdateSuccess: false,
                            created_on: the_date,
                            updated_on: the_date
                    }

                    // Get a <storyuid>
                    let newStoryRef = storiesRef.push()

                    // Store stories to root/stories
                    newStoryRef.set(story)

                    // Set up the structure of root/storiesUserOwned/<uid>/<storyuid>/
                    let uid_child = storiesUserOwnedRef.child(_uid)
                    let uid_child_new_story_child = uid_child.child(newStoryRef.key)
                    uid_child_new_story_child.set(story)
                    
                    this.lastCreatedStory = {
                        story: story,
                        storyId: uid_child_new_story_child
                    }

                    // Clean up the forms
                    this.who = '';
                    this.what = '';
                    this.why = '';
                    this.acceptance_criteria = '';
                    this.storyPoints = 0;
                    this.businessValue = 0;
                    
                    // Reset Validation
                    this.$nextTick().then(() => {
                        this.$validator.reset()
                        this.errors.clear();
                        this.fbError = false
                        this.fbErrorMsg = ''
                    });

                    this.createSuccess = true;

                    setTimeout(() => {
                        this.createSuccess = false
                    }, 4000);
                    
              } else {
                    console.log("NOT VALID") //@todo: Emit error message in UI from form validation in create form
                    this.fbErrorMsg = "The form is not valid! Please correct the errors!"
                    this.fbError = true

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
    toggleFormInput: function() {
        console.log("TOGGLE CLICKED")
        this.showFormInput = !this.showFormInput;
        console.log(this.showFormInput)
    },
    toogleInlineEdit: function(story, scope, idx) {
        if (scope === 'who'){
            story.whoEditMode = !story.whoEditMode
            this.$nextTick(() => this.$refs.who_edit[idx].focus());
            this.$nextTick(() => this.$refs.who_edit[idx].select());
        } else if (scope === 'what') {
            story.whatEditMode = !story.whatEditMode
            this.$nextTick(() => this.$refs.what_edit[idx].focus());
            this.$nextTick(() => this.$refs.what_edit[idx].select());
        } else {
            story.whyEditMode = !story.whyEditMode
            this.$nextTick(() => this.$refs.why_edit[idx].focus());
            this.$nextTick(() => this.$refs.why_edit[idx].select());
        }
    },
    saveWho: function(story, scope) {
        let theKey = story['.key'];

        if (scope === 'who') {
            console.log("SAVE WHO", story.who)
            story.whoEditMode = !story.whoEditMode;
            console.log("KEY", theKey);
            storiesUserOwnedRef.child(this.user.uid).child(theKey).child('who').set(story.who);
            storiesUserOwnedRef.child(this.user.uid).child(theKey).child('inlineUpdateSuccess').set(true);
            
            setTimeout(() => {
                storiesUserOwnedRef.child(this.user.uid).child(theKey).child('inlineUpdateSuccess').set(false);
            }, 1500);

        } else if (scope === 'what') {
            console.log("SAVE WHat", story.what)
            story.whatEditMode = !story.whatEditMode;
            console.log("KEY", theKey);
            storiesUserOwnedRef.child(this.user.uid).child(theKey).child('what').set(story.what);
            storiesUserOwnedRef.child(this.user.uid).child(theKey).child('inlineUpdateSuccess').set(true);
            
            setTimeout(() => {
                storiesUserOwnedRef.child(this.user.uid).child(theKey).child('inlineUpdateSuccess').set(false);
            }, 1500);

        } else {
            console.log("SAVE WHyt", story.why)
            story.whyEditMode = !story.whyEditMode;
            console.log("KEY", theKey);
            storiesUserOwnedRef.child(this.user.uid).child(theKey).child('why').set(story.why);
            storiesUserOwnedRef.child(this.user.uid).child(theKey).child('inlineUpdateSuccess').set(true);
            
            setTimeout(() => {
                storiesUserOwnedRef.child(this.user.uid).child(theKey).child('inlineUpdateSuccess').set(false);
            }, 1500);

        }
        
    }
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
      });
  }
}
</script>

<style scoped>

.add-story-container {
    background-color: #0070CB;
    padding-top: 30px;
    padding-bottom: 30px;
}

.add-story-container label {
    color: #fff;
}

.story-list {
    margin-top: 20px;
}

.story-card {
    margin-bottom: 20px;
}

.toggle-in-form-icon {
    color: #fff;
    font-size: 20px;
    opacity: 0.7;
}

.toggle-in-form-icon:hover {
    cursor: pointer;
}

.rm-story {
    cursor: pointer;
}

.clickable {
    cursor: pointer;
}

.success__message {
    position: absolute;
    top: 25px;
    width: 45%;
    right: 20px;
}

.editable__item {
    border-bottom: 1px dotted #0070CB;
}

.editable__item:hover {
    background-color: #0070CB;
    opacity: 0.9;
}

.input__inline {
    max-width: 200px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.inline__edit_message--success {
    max-width: 200px;
    position: absolute;
    right: 10px;
    padding: 5px;
    top: -21px;
    font-size: 12px;
    opacity: 0.8;
}
</style>


