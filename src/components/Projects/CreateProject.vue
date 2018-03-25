<template>
  <h1>CreateProject</h1>
</template>


<script>
/**
 * @todo: Put form into template
 * @todo: validation of form
 * @todo: firebase model
 * @todo: success messages
 */


import Header from '../Header'
import firebase from 'firebase'
import {firebaseApp} from '../../db'

let db = firebaseApp.database()

export default {
  name: 'CreateProject',
  data(){
      return {
          projectName: "",
          projectDescription: "",
          user: {},
          fbError: false,
          fbErrorMsg: '',
      }
  },
  methods: {
      addProject: function() {
          this.$validator.validateAll().then((result) => {
              if (result) {
                  let the_date =  Date.now()
                  let project = {
                      userId: _uid,
                      projectName: this.projectName,
                      projectDescription: this.projectDescription,
                      created_on: the_date,
                      updated_on: the_date
                  }
              }
              else {
                console.log("NOT VALID") //@todo: Emit error message in UI from form validation in create form
                this.fbErrorMsg = "The form is not valid! Please correct the errors!"
                this.fbError = true
              }
          });
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