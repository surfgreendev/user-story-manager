<template>
    <div class="signup-container">
        <div class="container grid-xs">
            <div class="columns">
                <div class="column col-12">
                    <h1>Sign Up</h1>
                    <p>Sign up here:</p>
                    <form>
                        <div class="form-group">
                            <label class="form-label" for="signup_email">E-Mail:</label>
                            <input class="form-input input-lg" type="email" id="signup_email" placeholder="E-Mail">
                            <label class="form-label" for="signup_pw">Password:</label>
                            <input class="form-input input-lg" type="password" id="signup_pw" placeholder="Enter Password">
                            <input class="signup-btn btn btn-lg btn-primary btn-block" type="submit" value="Sign Up">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'SignUp'
}
</script>

<style scoped>
.signup-container {
    background: pink;
}

.signup-btn {
    margin-top: 15px;
}
</style>

