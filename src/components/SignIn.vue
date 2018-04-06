<template>
    
    <div class="signin__container">
        <StandardHeader></StandardHeader>
        
        <div class="container-fluid">
            <div class="signin__full">
                <div class="row justify-content-center">
                    <div class="col-xs-12 col-sm-7 col-md-6 col-lg-4">
                        <div class="card signin-card">
                            <div class="card-body">
                                <h1>Sign In</h1>
                                
                                <div v-if="fbError" class="alert alert-danger" role="alert">
                                {{fbErrorMsg}}
                                </div>
                                <form @submit.prevent="signIn">
                                    <div class="form-group">
                                        <label class="form-label" for="signup_email">E-Mail:</label>
                                        <input class="form-control form-control-lg" type="email" id="signup_email" name="email" v-model="email" v-validate="'required|email'" placeholder="E-Mail" :class="{'input': true, 'is-error': errors.has('email')}">
                                        <p v-show="errors.has('email')" class="form-input-hint text-danger">{{ errors.first('email') }}</p>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="signup_pw">Password:</label>
                                        <input class="form-control form-control-lg" type="password" id="signup_pw" name="password" v-model="pw" v-validate="'required'" placeholder="Enter Password" :class="{'input': true, 'is-error': errors.has('password')}">
                                        <p v-show="errors.has('password')" class="form-input-hint text-danger">{{ errors.first('password') }}</p>

                                        <input class="signup-btn btn btn-lg btn-primary btn-block" type="submit" value="Sign In">
                                    </div>
                                </form>
                                <div class="text-center">
                                    <router-link class="btn btn-link centered" v-bind:to="'SignUp'">No account yet? Sign Up here</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>


<script>
import firebase from 'firebase'
import StandardHeader from './StandardHeader'
import Footer from './Footer'

export default {
  name: 'SignIn',
  components: {
      StandardHeader,
      Footer
  },
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
.signin__container {
    
     background-color: #0070CB;

    
    
    
    
}

.signup-btn {
    margin-top: 15px;
}

.signin-card {
    margin-top: 100px;
    -webkit-box-shadow: 0px 50px 166px -6px rgba(0,0,0,0.16);
    -moz-box-shadow: 0px 50px 166px -6px rgba(0,0,0,0.16);
    box-shadow: 0px 50px 166px -6px rgba(0,0,0,0.16);
}

.signin__full {
    height: 100vh;
}


</style>

