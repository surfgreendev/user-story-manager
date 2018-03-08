<template>
    <div class="the-root">
        <div class="container add-story-container">
            <div class="container grid-lg">
                <div class="columns">
                    <div class="column col-12">
                        <form @submit.prevent="addStory">
                            <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                                <p class="alert" v-if="errors.has('who')">{{errors.first('who')}}</p>
                            </transition>
                            <div class="columns">
                                <div class="column col-xs-12">
                                    <label class="form-label label-lg">As a </label> <input class="form-input input-lg" placeholder="Who" name="who" type="text" v-model="who" v-validate="'min:2'">
                                </div>
                                <div class="column col-xs-12">
                                    <label class="form-label label-lg">I'd like to </label> <input class="form-input input-lg" placeholder="What" name="what" type="text" v-model="what">
                                </div>
                                <div class="column col-xs-12">
                                    <label class="form-label label-lg">so that </label> <input class="form-input input-lg" placeholder="Why" name="why" type="text" v-model="why">
                                </div>
                            </div>
                           
                            <div class="acceptance-criterias-block form-group">
                                <label class="form-label">Acceptance Criterias: </label>
                                <textarea class="form-input" rows="10" placeholder="Enter Acceptance Criteria in Markdown here" name="acceptance_criteria" v-model="acceptance_criteria" />
                            </div>
                            <div class="text-right">
                                <input class="btn btn-primary text-right" type="submit" value="Create User Story" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="container grid-lg story-list">
            <div class="columns">
                <div class="column col-12">
                    <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceInDown">
                        <div class="card" v-for="(story, index) in stories" :key='index'> 
                            <div class="card-header">
                                <div class="card-title h5">{{story.who}} - {{story.what}} - {{story.why}}</div>
                                <div class="card-subtitle text-gray">User Story ID {{index}} {{story.show_ac}}</div>
                            </div>
                            <div class="card-body">
                                <p>As a {{story.who}} I'd like to {{story.what}}, so that {{story.why}}</p>
                                <p v-if="!story.show_ac">{{story.acceptance_criteria}}</p>
                            </div>
                            <div class="card-footer">
                                <div class="text-right">
                                    <i v-on:click="deleteStory(index)" class="icon icon-delete"></i>
                                    <button v-on:click="toggleAcceptanceCriteria(story)" class="btn btn-default btn-sm"><i class="icon icon-arrow-down"></i> Show Acceptance Criterias</button>
                                </div>
                            </div>
                        </div>
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'ListStories',
  components: {
      
  },
  data() {
      return {
          who: '',
          what: '',
          why: '',
          acceptance_criteria: '',
          stories: [
              {who: "Product Manager", what: "do sth", why: "So that ...", acceptance_criteria: "nope", show_ac: "false"},
              {who: "Consultsnt", what: "do sth", why: "So that ...", acceptance_criteria: "nope", show_ac: "false"}
              ]
      }
  },
  methods: {
      addStory: function() {
          this.$validator.validateAll().then((result) => {
              if (result) {
                    var story = {who: this.who, what: this.what, why: this.why, acceptance_criteria: this.acceptance_criteria, show_ac: true}
                    this.stories.push(story)
                    this.who = '';
                    this.what = '';
                    this.why = '';
                    this.acceptance_criteria = '';
              } else {
                    console.log("NOT VALID")
              }
          });
      },
      deleteStory: function(i) {
        console.log("DELETE CLICKED")
        this.stories.splice(i, 1);
    },
    toggleAcceptanceCriteria: function(story) {
        console.log("AC CLICKED")
        story.show_ac = !story.show_ac;

    }
  } 
}
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";

.add-story-container {
    background-color: aliceblue;
    padding-top: 35px;
    padding-bottom: 35px;
}

.story-list {
    margin-top: 20px;
}
</style>
