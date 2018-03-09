<template>
    <div class="signin-container">
        <div class="container grid-xs">
            <div class="columns">
                <div class="column col-12">
                    <div class="card">
                        <div class="card-body">
                            <h1>Sign In</h1>
                            <p>Sign in here:</p>
                            <form>
                                <div class="form-group">
                                    <label class="form-label label-lg" for="signup_email">E-Mail:</label>
                                    <input class="form-input input-lg" type="email" id="signup_email" placeholder="E-Mail">
                                    <label class="form-label label-lg" for="signup_pw">Password:</label>
                                    <input class="form-input input-lg" type="password" id="signup_pw" placeholder="Enter Password">
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
export default {
  name: 'SignIn'
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

