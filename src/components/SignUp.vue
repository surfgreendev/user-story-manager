<template>
    <div class="signup-container">
        <div class="container grid-xs">
            <div class="columns">
                <div class="column col-12">
                    <div class="card">
                        <div class="card-body">
                            <h1>Sign Up</h1>
                            <p>Sign up here:</p>
                            <form @submit.prevent="signUp">
                                <div class="form-group">
                                    <label class="form-label label-lg" for="signup_email">E-Mail:</label>
                                    <input class="form-input input-lg" type="email" id="signup_email" v-model="email" placeholder="E-Mail">
                                    <label class="form-label label-lg" for="signup_pw">Password:</label>
                                    <input class="form-input input-lg" type="password" id="signup_pw" v-model="pw" placeholder="Enter Password">
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

export default {
  name: 'SignUp',
  data () {
      return {
          email: '',
          pw: ''
      }
  },
  methods: {
      signUp: function (){
          console.log('signup', this.email, this.pw)

          firebase.auth().createUserWithEmailAndPassword(this.email, this.pw).then(
              user => {
                  console.log("USER HAS BEEN CREATED", user)
                  this.$router.replace('stories')
              },
              err => {
                  console.log("ERROR EMiTTED ON SIGNUP", err)
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

