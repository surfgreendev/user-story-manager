<template>
    <div class="signin-container">
        <div class="container grid-xs">
            <div class="columns">
                <div class="column col-12">
                    <div class="card">
                        <div class="card-body">
                            <h1>Sign In</h1>
                            <p>Sign in here:</p>
                            <form @submit.prevent="signIn">
                                <div class="form-group">
                                    <label class="form-label label-lg" for="signup_email">E-Mail:</label>
                                    <input class="form-input input-lg" type="email" id="signup_email" v-model="email" placeholder="E-Mail">
                                    <label class="form-label label-lg" for="signup_pw">Password:</label>
                                    <input class="form-input input-lg" type="password" id="signup_pw" v-model="pw" placeholder="Enter Password">
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
          'email': '',
          'pw': ''
      }
  },
  methods: {
      signIn: function (){
          console.log("SIGN IN", this.email, this.pw)

          firebase.auth().signInWithEmailAndPassword(this.email, this.pw).then(
              function(user){
                  console.log("SIGNE IN USER:", user)
              },
              function(err){
                  console.log("ERROR SIGN IN", err)
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

