<template>
  <footer>
      <div class="container-fluid footer__container">
          <div class="container footer__inner">
              <div class="row">
                  <div class="col-md-3 col-sm-6">
                      <h4><strong>LEYLA</strong></h4>
                  </div>
                  <div class="col-md-3 col-sm-6">
                      <h5>Contact</h5>
                      <ul class="list-unstyled">
                          <li>carl@studiofrnkn.com</li>
                          <li>Gartenstr. 17d</li>
                          <li>97422 Schweinfurt</li>
                          <li>Germany</li>
                      </ul>
                  </div>
                  <div class="col-md-3 col-sm-6">
                      <h5>Navigation</h5>
                      <ul class="list-unstyled">
                          <li>Home</li>
                          <li>Sign Up</li>
                          <li>Sign In</li>
                          <li>Pricing</li>
                      </ul>
                  </div>
                  <div class="col-md-3 col-sm-6">
                      <h5>Legal</h5>
                      <ul class="list-unstyled">
                          <li>Imprint</li>
                          <li>Terms and Conditions</li>
                          <li>Data Privacy</li>
                      </ul>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-12">
                      <p><small>Made with love by <a href="http://www.studiofrnkn.com">STUDIO FRNKN</a></small></p>
                  </div>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
    footer {
        margin-top: 50px;
        color: #fff;
    }
    .footer__container {
        background-color: #0070CB;
        min-height: 250px;
    }
    .footer__inner {
        padding-top: 20px;
    }

    .footer__inner a {
        color: #fff;
    }
</style>
