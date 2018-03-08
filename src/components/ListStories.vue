<template>
    <div class="container grid-lg">
        <div class="columns">
            <div class="column col-12 add-story-container">
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
                    </br>
                    <div class="acceptance-criterias-block form-group">
                        <label class="form-label">Acceptance Criterias: </label>
                        <textarea class="form-input" rows="10" placeholder="Enter Acceptance Criteria in Markdown here" name="acceptance_criteria" v-model="acceptance_criteria" />
                    </div>
                    <input class="btn btn-primary" type="submit" value="Create User Story" />
                </form>
            </div>
            <div class="column col-12">
                <h1>LIST STORIES</h1>
                <ul>
                    <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceInDown">
                        <li v-for="(story, index) in stories" :key='index'>{{index}} {{story.who}}, {{story.what}}, {{story.why}}, {{story.acceptance_criteria}} <button v-on:click="deleteStory(index)">delete</button></li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import CreateForm from "./CreateForm";

export default {
  name: 'ListStories',
  components: {
      CreateForm
  },
  data() {
      return {
          who: '',
          what: '',
          why: '',
          acceptance_criteria: '',
          stories: [
              {who: "Product Manager", what: "do sth", why: "So that ...", acceptance_criteria: "nope"},
              {who: "Consultsnt", what: "do sth", why: "So that ...", acceptance_criteria: "nope"}
              ]
      }
  },
  methods: {
      addStory: function() {
          this.$validator.validateAll().then((result) => {
              if (result) {
                    var story = {who: this.who, what: this.what, why: this.why, acceptance_criteria: this.acceptance_criteria}
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
    }
  } 
}
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
</style>
