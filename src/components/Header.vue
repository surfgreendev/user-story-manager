<template>
    <header class="navbar">
        <section class="navbar-section">
            <a href="#" class="navbar-brand mr-2">Layla</a>
            <a href="#" class="btn btn-link">Docs</a>
            <a href="https://github.com/picturepan2/spectre" class="btn btn-link">GitHub</a>
        </section>
        <section class="navbar-section">
            <button class="btn btn-link" v-on:click="logout">Logout</button>
        </section>
    </header>
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
