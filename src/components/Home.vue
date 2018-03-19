<template>
<div class="wrapper">
    <nav>
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link active" href="#">Layla</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul>
    </nav>
    <div class="teaser__jumbo jumbotron jumbotron-fluid ta-start-page-jumbo">
        <div class="container">

            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    </div>
    <div class="container">
    <div class="row cm__box cm__box--text">
        <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="text-xs-center">
            <h2>About FRNKN - How it works</h2>
            <hr class="hr-content">

            <p class="lead">FRNKN lets you manage epics, user stories, acceptance criteria and software requirements. Our feature rich project backlogs support your agile development and project management workflow.
            We are currently under heavy development. Subscribe now and get notified when we'll have launched our beta programm.
            Subscribers will get a special early bird offer and an exclusive beta account!</p>
            <br>
            <a href="#email-sub" class="btn btn-danger btn-lg">Sign Up Now</a>
        </div>
        </div>
        </div>
    <div class="row cm__box cm__box--features">
        <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="text-xs-center">
            <br><br>
            <h2>FRNKN - Features</h2>
            <hr class="hr-content">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-md-4">
            <div class="card text-xs-center">
            <div class="card-block">
                <h3 class="card-title">Backlogs</h3>
                <h6 class="card-subtitle text-muted">Manage multiple project backlogs.</h6>
            </div>
            <img class="card-img-top" style="width:100%;" src="/static/content/start_page/frnkn_1.jpg" alt="FRNKN - Manage multiple project backlogs with epics, user stories, acceptance criterias and use cases">

            <div class="card-block">
                <p class="card-text">FRNKN lets you manage epics, user stories and non functional requirements in a dramatically easy way.</p>
            </div>
            </div>
        </div>
        <div class="col-xs-12 col-md-4">
            <div class="card text-xs-center">
            <div class="card-block">
                <h3 class="card-title">Sofware Specs</h3>
                <h6 class="card-subtitle text-muted">Manage User Stories and more.</h6>
            </div>
            <img class="card-img-top" style="width:100%;" src="/static/content/start_page/frnkn_2.jpg" alt="Simply manage and create user stories for agile development">

            <div class="card-block">
                <p class="card-text">Create, update and break down epics and user stories in a super fast and intuitive manner, to save time and costs.</p>
            </div>
            </div>
        </div>
        <div class="col-xs-12 col-md-4">
            <div class="card text-xs-center">
            <div class="card-block">
                <h3 class="card-title">Collaboration</h3>
                <h6 class="card-subtitle text-muted">Specs for dev teams.</h6>
            </div>
            <img class="card-img-top" style="width:100%;" src="/static/content/start_page/frnkn_3.jpg" alt="Software specification for teams. Collaborate with engineers, product owners and stakeholders on user stories and more.">

            <div class="card-block">
                <p class="card-text">Filter, sort and reprioritize backlog items within highly customizable list and grid views. Export backlog items to printable post its.</p>
            </div>
            </div>
        </div>
    </div>

    <div class="row cm__box cm__box--faq">
        <div class="col-xs-12">
        <br><br>
        <div class="text-xs-center">
            <h2>FRNKN - Frequently Asked Questions</h2>
            <hr class="hr-content">
        </div>

        <dl class="dl-horizontal dl__faq">
            <dt class="col-sm-3"><h4>What is FRNKN?</h4></dt>
            <dd class="col-sm-9 lead">FRNKN is a new, sophisticated app that allows product owners, managers and software development teams to easily create, organize, manage and discuss
            agile software specifications.</dd>

            <dt class="col-sm-3"><h4>How does FRNKN work?</h4></dt>
            <dd class="col-sm-9 lead">FRNKN allows you to create backlogs that hold backlog items, such as user stories, epics or non functional requirements. You can create, update, archive or breakdown user stories, attach wireframes or documents, write acceptance criterias and notes (with markdown). You can even prioritize backlog items, add story points and business values and print your backlog onto cards.</dd>

            <dt class="col-sm-3"><h4>Who is FRNKN?</h4></dt>
            <dd class="col-sm-9 lead">Behind FRNKN stands a small team of experienced product managers & product owners and software engineers with +8 years of experience in e-commerce, digital advertising and really large relaunch projects. 

            <dt class="col-sm-3"><h4>When is FRNKN available?</h4></dt>
            <dd class="col-sm-9 lead">We're working hard on the project. Besides having a full time job and a family we will launch the public version of FRNKN around Summer/Autumn 2017. Invitations for beta/early bird accounts will be send as soon as possible.</dd>

            <dt class="col-sm-3"><h4>How much will it cost?</h4></dt>
            <dd class="col-sm-9 lead">FRNKN is more than just a simple side project, but we will offer fair prices.</dd>

        </dl>
        <br><br>
        </div>

    </div>
    </div>
</div><!--end wrapper-->
    
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


.home__teaser {
    background: #643adc; /* Old browsers */
    background: -moz-linear-gradient(top, #643adc 0%, #7a59db 50%, #8569db 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #643adc 0%,#7a59db 50%,#8569db 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #643adc 0%,#7a59db 50%,#8569db 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#643adc', endColorstr='#8569db',GradientType=0 ); /* IE6-9 */
    color: #fff;
    height: 90vh;
}
</style>
