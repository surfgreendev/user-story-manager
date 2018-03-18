<template>
    <div class="the-root">
        <Header></Header>
        <div class="container teaser">
            <div class="container grid-lg">
                <div class="columns">
                    <div class="column col-12 text-center">
                      <h1>Layla <br> Create and Manage User Stories</h1>
                      <p>Layla is an easy way to create and manage user stories.</p>
                      <router-link :to="{name: 'SignUp'}"><button class="btn btn-primary">Sign Up Now</button></router-link>
                      <button class="btn btn-secondary">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container grid-lg about"><h2>About</h2></div>
        <div class="container grid-lg pricing">
            <h2>Pricing</h2>
            <div class="columns">
                <div class="column col-6 col-xs-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title h5">Microsoft</div>
                            <div class="card-subtitle text-gray">Software and hardware</div>
                        </div>
                        <div class="card-body">
                            Empower every person and every organization on the planet to achieve more.
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-primary">Do</button>
                        </div>
                    </div>
                </div>

                <div class="column col-6 col-xs-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title h5">Microsoft</div>
                            <div class="card-subtitle text-gray">Software and hardware</div>
                        </div>
                        <div class="card-body">
                            Empower every person and every organization on the planet to achieve more.
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-primary">Do</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container grid-lg about-creator"><h2>About the Creator of Layla</h2></div>
    </div>
</template>


<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Home',
  components: {
      Header,
      Footer
  }
}
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";

.teaser {
    background-color: red;
}
</style>
