<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand logo__leyla" href="#">
             <strong>LEYLA</strong>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarHeader">
            <ul class="navbar-nav mr-auto ">
                <li class="nav-item"><a class="nav-link" href="/">Backlogs</a></li>
                <li class="nav-item"><a class="nav-link" href="/">Pricing</a></li>
                <li class="nav-item"><a class="nav-link" href="/">About</a></li>
            </ul>
            <ul class="navbar-nav ">
                <li class="nav-item"><button class="btn btn-link" v-on:click="logout">Logout</button></li>
            </ul>
        </div>
    </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Header',
  data() {
      return {}
  },
  methods: {
      logout: function(){
          console.log("SIGN OUT")
          firebase.auth().signOut().then(() => {
              this.$router.replace('signin')
        })
      }
  }
}
</script>

<style>
.logo__leyla {
    color: #0070CB !important;
    
}
</style>
