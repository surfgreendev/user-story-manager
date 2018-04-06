<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand logo__leyla" href="#">
            <!--<img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">-->
            <strong>LEYLA</strong>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarStandardHeader" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarStandardHeader">
            <ul class="navbar-nav mr-auto ">
                <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="/">Pricing</a></li>
                <li class="nav-item"><a class="nav-link" href="/">About</a></li>
            </ul>
            <ul class="navbar-nav ">
                <li class="nav-item"><router-link class="btn btn-link" v-bind:to="'SignIn'">Sign in</router-link></li>
                <li class="nav-item"><router-link class="btn btn-primary" v-bind:to="'SignUp'">Sign up</router-link></li>
            </ul>
        </div>
    </nav>
</template>


<script>
export default {
  name: 'StandardHeader',
}
</script>

<style>
.logo__leyla {
    color: #0070CB !important;
}
</style>
