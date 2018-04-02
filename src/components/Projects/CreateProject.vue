<template>
    <div class="the-root">
      <Header></Header>
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <h2>Create a new project</h2>
              </div>
          </div>
          <div class="row">
              <div class="col-12">
                  <div v-if="fbError" class="alert alert-danger" role="alert">
                    {{fbErrorMsg}}
                  </div>
                  <form @submit.prevent="addProject">
                      <div class="form-group">
                          <label for="project_name">Project Name:</label>
                          <input type="text" class="form-control input-lg" placeholder="Enter project name" v-model="projectName" v-validate="'required'" :class="{'input': true, 'is-error': errors.has('projectName')}">
                           <p v-show="errors.has('who')" class="badge badge-danger">{{ errors.first('projectName') }}</p>                                  
                      </div>
                       <div class="form-group">
                          <label for="project_description">Project Desciption:</label>
                          <textarea class="form-control" rows="10" placeholder="Enter Acceptance Criteria in Markdown here" name="acceptance_criteria" v-model="projectDescription" />
                      </div>
                      <div class="row">
                            <div class="col text-right">
                                <input class="btn btn-primary text-right" type="submit" value="Create Project" />
                            </div>
                       </div>
                  </form>
              </div>
          </div>
      </div>
    </div>
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
let projectRef = db.ref('projects')
let projectUserOwnedRef = db.ref('projectUserOwned/')
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
                  let _uid = firebase.auth().currentUser.uid

                  let project = {
                      userId: _uid,
                      projectName: this.projectName,
                      projectDescription: this.projectDescription,
                      created_on: the_date,
                      updated_on: the_date
                  }

                  let newProjectRef = projectRef.push()
                  newProjectRef.set(project)

                  let uid_child = projectUserOwnedRef.child(_uid)
                  let uid_child_new_project_child = uid_child.child(newProjectRef.key)
                  uid_child_new_project_child.set(project)

                  this.projectName = ""
                  this.projectDescription = ""

                  // Reset Validation
                  this.$nextTick().then(() => {
                        this.$validator.reset()
                        this.errors.clear();
                        this.fbError = false
                        this.fbErrorMsg = ''

                  })
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