<template>
  <div id="app">
    <transition name="rout-trans" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

/*@import url("https://unpkg.com/spectre.css/dist/spectre.min.css");*/
/*@import url("https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.1/spectre-icons.min.css");*/
/*@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css")*/

#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /*margin-top: 60px;*/
}

.list-inline {
  list-style: none; 
}

.list-inline li {
  display: inline;
  margin-right: 4px;
}
</style>
