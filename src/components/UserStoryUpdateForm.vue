<template>
  <form @submit.prevent="updateStory">
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <p class="alert" v-if="errors.has('who')">{{errors.first('who')}}</p>
        </transition>
        <div class="columns">
           
            <div class="column col-xs-12">
                <label class="form-label label-lg">As a </label> <input class="form-input input-lg"  v-model="who" name="who" type="text"  >
            </div>
            <div class="column col-xs-12">
                <label class="form-label label-lg">I'd like to </label> <input class="form-input input-lg"   v-model="what" placeholder="What" name="what" type="text" >
            </div>
            <div class="column col-xs-12">
                <label class="form-label label-lg">so that </label> <input class="form-input input-lg"  v-model="why" placeholder="Why" name="why" type="text" >
            </div>
        </div>
        
        <div class="acceptance-criterias-block form-group">
            <label class="form-label">Acceptance Criterias: </label>
            <textarea class="form-input" rows="10" placeholder="Enter Acceptance Criteria in Markdown here"   v-model="acceptance_criteria" name="acceptance_criteria"  />
        </div>
        <div class="text-right">
            <input class="btn btn-primary text-right" type="submit" value="Save User Story" />
        </div>
    </form>
</template>

<script>
export default {
  name: 'UserStoryUpdateForm',
  props: {
      pwho: String,
      pwhat: String,
      pwhy: String,
      pacceptance_criteria: String
  },
  data () {
      return {
        who: this.pwho,
        what: this.pwhat,
        why: this.pwhy,
        acceptance_criteria: this.pacceptance_criteria 
      }
  },
  methods: {
      updateStory: function() {
          console.log("UPDATE STORY", this.who, this.what, this.why)
      }
  },
  created: {

  }
}
</script>
