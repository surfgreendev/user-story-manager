<template>
    <div class="signup-container">
        <div class="container grid-xs">
            <div class="columns">
                <div class="column col-12">
                    <div class="card">
                        <div class="card-body">
                            <h1>Sign Up</h1>
                            <p>Sign up here:</p>
                            <div v-if="fbError" class="toast toast-error">
                               {{fbErrorMsg}}
                            </div>

                            <form @submit.prevent="signUp">
                                <div class="form-group">
                                    <label class="form-label label-lg" for="display_name">Name:</label>
                                    <input class="form-input input-lg" name="displayname" type="text" id="display_name" v-model="displayname" v-validate="'required|min:4'" placeholder="Your Name" :class="{'input': true, 'is-error': errors.has('displayname')}">
                                    <p v-show="errors.has('displayname')" class="form-input-hint">{{ errors.first('displayname') }}</p>

                                    <label class="form-label label-lg" for="signup_email">E-Mail:</label>
                                    <input class="form-input input-lg" name="email" type="text" id="signup_email" v-model="email" v-validate="'required|email'" placeholder="E-Mail" :class="{'input': true, 'is-error': errors.has('email')}">
                                    <p v-show="errors.has('email')" class="form-input-hint">{{ errors.first('email') }}</p>
                                    
                                    <label class="form-label label-lg" for="signup_pw">Password:</label>
                                    <input class="form-input input-lg" name="password" type="password" id="signup_pw" v-model="pw" v-validate="'required|min:6'" placeholder="Enter Password" :class="{'input': true, 'is-error': errors.has('password')}">
                                    <p v-show="errors.has('password')" class="form-input-hint">{{ errors.first('password') }}</p>

                                    <input class="signup-btn btn btn-lg btn-primary btn-block" type="submit" value="Sign Up">
                                </div>
                            </form>
                            <div class="divider text-center" data-content="Already have an account?"></div>
                            <router-link class="btn btn-link centered" v-bind:to="'SignIn'">Sign in here</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import firebase from 'firebase';

import {firebaseApp} from '../db'

let db = firebaseApp.database()

var usersRef = db.ref('users')

export default {
  name: 'SignUp',
  data () {
      return {
          displayname: '',
          email: '',
          pw: '',
          fbError: false,
          fbErrorMsg: ''
      }
  },
  firebase: {
      users: usersRef
  },
  methods: {
      signUp: function (){
          this.$validator.validateAll().then((result) => {
              if (result) {
                  console.log('FORM subMITTED CORRECT')
              }
              else {
                  console.log('There are errors')
              }
          });
          console.log('signup', this.displayname, this.name, this.email, this.pw)

          firebase.auth().createUserWithEmailAndPassword(this.email, this.pw).then(
              user => {
                  console.log("USER HAS BEEN CREATED", user)
                  user.updateProfile({displayName: this.displayname})
                  usersRef.push({
                      userId: user.uid,
                      name: user.providerData[0].displayName,
                      email: user.providerData[0].email,
                  })
                  this.$router.replace('stories')
                  
              },
              err => {
                  console.log("ERROR EMiTTED ON SIGNUP", err)

                  this.fbError = true
                  this.fbErrorMsg = err.message

              }
          );
      }
  }
}
</script>

<style scoped>
.signup-container {
    
    background: lightgrey;
    
}

.signup-btn {
    margin-top: 15px;
}
</style>

