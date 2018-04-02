<template>
  <div class="the-root">
    <Header></Header>
    <div class="container list__projects">
      You have {{this.dbProjectUserOwnedListing.length}}
      <div class="row">
        
        <div class="col-sm-12 col-md-4" v-for="(project, index) in this.dbProjectUserOwnedListing" :key='index'>
          <div class="card project__item">
            <div class="card-body">
              <h5 class="card-title">{{ project.projectName }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Created by ... on ...</h6>
              <p class="card-text">{{ project.projectDescription }}</p>
              <a href="#" class="card-link">View Stories</a>
              <a href="#" class="card-link">Update Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from 'firebase'
import {firebaseApp} from '../../db'
import Header from '../Header'

let db = firebaseApp.database()

export default {
  name: 'ListProject',
  components: {
    Header
  },
  firebase: function() {
    const loggedInUserUid = firebase.auth().currentUser.uid;
    console.log("USER1", loggedInUserUid)
    return {
      dbProjectUserOwnedListing: db.ref('projectUserOwned/' + loggedInUserUid),
    }
  },
  data(){
      return {
        projects: [],
        user: {}
      }
  },
  methods: {},
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
  .project__item {
    margin-bottom: 25px;
  }
</style>
