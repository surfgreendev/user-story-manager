<template>
    <div class="signin-container">
        <div class="container grid-xs">
            <div class="columns">
                <div class="column col-12">
                    <div class="card">
                        <div class="card-body">
                            <h1>Sign In</h1>
                            <p>Sign in here:</p>
                             <div v-if="fbError" class="toast toast-error">
                               {{fbErrorMsg}}
                            </div>
                            <form @submit.prevent="signIn">
                                <div class="form-group">
                                    <label class="form-label label-lg" for="signup_email">E-Mail:</label>
                                    <input class="form-input input-lg" type="email" id="signup_email" name="email" v-model="email" v-validate="'required|email'" placeholder="E-Mail" :class="{'input': true, 'is-error': errors.has('email')}">
                                    <p v-show="errors.has('email')" class="form-input-hint">{{ errors.first('email') }}</p>

                                    <label class="form-label label-lg" for="signup_pw">Password:</label>
                                    <input class="form-input input-lg" type="password" id="signup_pw" name="password" v-model="pw" v-validate="'required'" placeholder="Enter Password" :class="{'input': true, 'is-error': errors.has('password')}">
                                    <p v-show="errors.has('password')" class="form-input-hint">{{ errors.first('password') }}</p>

                                    <input class="signup-btn btn btn-lg btn-primary btn-block" type="submit" value="Sign In">
                                </div>
                            </form>
                            <div class="divider text-center" data-content="Don't have an account yet?"></div>
                            <router-link class="btn btn-link centered" v-bind:to="'SignUp'">Sign Up here</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import firebase from 'firebase'

export default {
  name: 'SignIn',
  data () {
      return {
          email: '',
          pw: '',
          fbError: false,
          fbErrorMsg: ''
      }
  },
  methods: {
      signIn: function (){
          console.log("SIGN IN", this.email, this.pw)

          firebase.auth().signInWithEmailAndPassword(this.email, this.pw).then(
              user => {
                  console.log("SIGNE IN USER:", user)
                  this.$router.replace('stories')
              },
              err => {
                  console.log("ERROR SIGN IN", err)
                  this.fbError = true
                  this.fbErrorMsg = err.message
              }
          );
      }
  }
}
</script>

<style scoped>
.signin-container {
    
    background: lightgrey;
    
}

.signup-btn {
    margin-top: 15px;
}
</style>

