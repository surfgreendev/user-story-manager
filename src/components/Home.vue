<template>
<div class="wrapper">
    <StandardHeader></StandardHeader>
    <div class="teaser__jumbo jumbotron jumbotron-fluid  ta-start-page-jumbo">
        <div class="container-fluid">
            <!-- As a heading -->
            
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                     <h2 class="display-5">Todo Lists for Agile Software Projects</h2>
                     <p class="teaser__jumbo--p lead">Easily Manage Backlogs & User Stories</p>
                </div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <div class="card teaser__card">
                        <div class="card-header">
                            <small class="muted">#1 | User Story | short id: STORY-1</small>
                        </div>
                        <div class="card-body">
                            <p class="card-text jumbo-story-text-1 lead">
                                As a Product Manager I'd like to create awesome user stories with Leyla so that I can create perfect specs for my scrum team.
                            </p>
                            <ul class="list-inline">
                                <li class="list-inline-item">Story Points: 5</li>
                                <li class="list-inline-item">Business Value: 130</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
                
            </div>
            
            <div class="row">
                <div class="col-12 text-center">
                    <ul class="list-inline">
                        <router-link class="btn btn-light btn-lg" v-bind:to="'SignUp'">Sign up for free</router-link>
                        <button class="btn btn-link jumbo__teaser--more-link">Learn more</button>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
    <div class="row cm__box cm__box--text">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div class="text-center">
                <h2 class="display-5">About</h2>
                <hr class="hr-content">
                <h3>What is LEYLA?</h3>
                <p class="lead">LEYLA lets you manage epics, user stories, acceptance criteria and software requirements. Our feature rich project backlogs support your agile development and project management workflow.
                We are currently under heavy development. Subscribe now and get notified when we'll have launched our beta programm.
                Subscribers will get a special early bird offer and an exclusive beta account!</p>
                <br>
            </div>
         <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
        </div>
        </div>
    <div class="row cm__box cm__box--features">
        <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="text-xs-center">
            <h2>Features</h2>
            <hr class="hr-content">
            <h3>Create great User Stories and Backlogs</h3>
        </div>
        </div>
    </div>
    
    <div class="row">
       
        <div class="card-deck">
            <div class="card text-center">
                <img class="card-img-top" style="width:100%;" :src="image1"  alt="FRNKN - Manage multiple project backlogs with epics, user stories, acceptance criterias and use cases">
                <div class="card-body">
                    <h5 class="card-title">Backlogs</h5>
                    <h6 class="card-subtitle text-muted">Manage multiple project backlogs.</h6>
                    <hr class="hr-content">
                    <p class="card-text">FRNKN lets you manage epics, user stories and non functional requirements in a dramatically easy way.</p>
                </div>
            </div>
        
            <div class="card text-center">
                <img class="card-img-top" style="width:100%;" :src="image2"  alt="Simply manage and create user stories for agile development">
                <div class="card-body">
                    <h5 class="card-title">Sofware Specs</h5>
                    <h6 class="card-subtitle text-muted">Manage User Stories and more.</h6>
                    <hr class="hr-content">
                    <p class="card-text">Create, update and break down epics and user stories in a super fast and intuitive manner, to save time and costs.</p>
                </div>
            </div>
        
        
            <div class="card text-center">
                 <img class="card-img-top" style="width:100%;" :src="image3"  alt="Software specification for teams. Collaborate with engineers, product owners and stakeholders on user stories and more.">
                <div class="card-body">
                    <h5 class="card-title">Collaboration</h5>
                    <h6 class="card-subtitle text-muted">Specs for dev teams.</h6>
                    <hr class="hr-content">
                    <p class="card-text">Filter, sort and reprioritize backlog items within highly customizable lists. Export backlog items to printable post its.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row cm__box cm__box--faq">
        <div class="col-xs-12">
        <br><br>
        <div class="text-xs-center">
            <h2>Frequently Asked Questions</h2>
            <hr class="hr-content">
            <h3>Here are answers to the most asked questions about LEYLA</h3>
        </div>

        <dl class="dl-horizontal dl__faq">
            <dt class="col-sm-3"><h4>What is LEYLA?</h4></dt>
            <dd class="col-sm-9 lead">LEYLA is a new, sophisticated app that allows product owners, managers and software development teams to easily create, organize, manage and discuss
            agile software specifications.</dd>

            <dt class="col-sm-3"><h4>How does LEYLA work?</h4></dt>
            <dd class="col-sm-9 lead">LEYLA allows you to create backlogs that hold backlog items, such as user stories, epics or non functional requirements. You can create, update, archive or breakdown user stories, attach wireframes or documents, write acceptance criterias and notes (with markdown). You can even prioritize backlog items, add story points and business values and print your backlog onto cards.</dd>

            <dt class="col-sm-3"><h4>Who is LEYLA?</h4></dt>
            <dd class="col-sm-9 lead">Behind LEYLA stands a small team of experienced product managers & product owners and software engineers with +8 years of experience in e-commerce, digital advertising and really large relaunch projects. 

            <dt class="col-sm-3"><h4>When is LEYLA available?</h4></dt>
            <dd class="col-sm-9 lead">We're working hard on the project. Besides having a full time job and a family we will launch the public version of FRNKN around Summer/Autumn 2017. Invitations for beta/early bird accounts will be send as soon as possible.</dd>

            <dt class="col-sm-3"><h4>How much will it cost?</h4></dt>
            <dd class="col-sm-9 lead">LEYLA is more than just a simple side project, but we will offer fair prices.</dd>

        </dl>
        <br><br>
        </div>

    </div>

    <div class="row cm__box cm__box--pricing">
        <div class="col-12">
            <div class="text-center">
                <h2>Pricing</h2>
                <hr class="hr-content">
                <h3>How much does LEYLA cost?</h3>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <img class="card-img-top" :src="image1" /> 
                <div class="card-body">
                    <h5 class="card-title">Free</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
         <div class="col-4">
            <div class="card">
            <img class="card-img-top" :src="image2" /> 
                <div class="card-body">
                    <h5 class="card-title">Standard</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
         <div class="col-4">
            <div class="card">
            <img class="card-img-top" :src="image3" /> 
                <div class="card-body">
                    <h5 class="card-title">Premium</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
    </div>
</div><!--end wrapper-->
    
</template>


<script>
import StandardHeader from './StandardHeader'
import Header from './Header'
import Footer from './Footer'
import image1 from '../assets/img/frnkn_1.jpg'
import image2 from '../assets/img/frnkn_2.jpg'
import image3 from '../assets/img/frnkn_3.jpg'




export default {
  name: 'Home',
  components: {
      Footer,
      StandardHeader
  },
  data() {
      return {
          image1: image1,
          image2: image2,
          image3: image3
      }
  }
}
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";


.home__teaser {
    
/*font-family: 'Open Sans', sans-serif;*/
    background: #643adc; /* Old browsers */
    background: -moz-linear-gradient(top, #643adc 0%, #7a59db 50%, #8569db 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #643adc 0%,#7a59db 50%,#8569db 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #643adc 0%,#7a59db 50%,#8569db 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#643adc', endColorstr='#8569db',GradientType=0 ); /* IE6-9 */
    color: #fff;
    height: 75vh;
}

.teaser__card {
    margin-top: 1rem;
    margin-bottom: 2rem;
}

.teaser__jumbo {
background: #0070CB;
height: 75vh;
}

.teaser__jumbo h2 {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
}

.teaser__jumbo--p {
    color: white;
}

.cm__box {
    text-align: center;
}

.cm__box--features {
    margin-bottom: 20px;
}

.jumbo__teaser--more-link {
    color: white;
}

.hr-content {
    width: 15%;
    height: 5px;
    background-color: #0070CB;
    color: #0070CB;
}
</style>
