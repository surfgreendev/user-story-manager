<template>
    <div>
        <form @submit.prevent="addStory">
            <label>Who: </label> <input name="who" type="text" v-model="who">
            <label>What: </label> <input name="what" type="text" v-model="what">
            <label>Why: </label> <input name="why" type="text" v-model="why">
            <input type="submit" value="Create User Story" />
        </form>
        <h1>LIST STORIES</h1>
        <ul>
            <li v-for="(story, index) in stories" :key='index'>{{story.who}}, {{story.what}}, {{story.why}}</li>
        </ul>
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
          stories: [
              {who: "Product Manager", what: "do sth", why: "So that ..."},
              {who: "Consultsnt", what: "do sth", why: "So that ..."}
              ]
      }
  },
  methods: {
      addStory: function() {
          var story = {who: this.who, what: this.what, why: this.why}
          this.stories.push(story)
          this.who = ''
          this.what = ''
          this.why = ''
      }
  }
}
</script>

