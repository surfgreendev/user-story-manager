<template>
    <div class="container update-story-container">
        <div class="container grid-lg">
            <div class="columns">
                <div class="column col-12">
                    <h1> Update Your User Story With ID {{ $route.params.storyId }}</h1>
                    <!--<UserStoryUpdateForm pwho="TEST WHO" pwhy="TEST WHY" pwhat="mfsanflkdsn" pacceptance_criteria="FDSAFK"></UserStoryUpdateForm>-->
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserStoryUpdateForm from './UserStoryUpdateForm'

export default {
  name: 'UpdateStory',
  components: {
      UserStoryUpdateForm
  },
  data () {
      return {
          who: '',
          what: '',
          why: '',
          acceptance_criteria: ''
      }
  },
  methods: {
      updateStory: function(){
           console.log("UPDATE STORY", this.who, this.what, this.why)
          //this.$router.go("/#")
          this.$router.push({path: '/'})
      }
  },
  created: function(storyId) {
      console.log("Update View created, now make get call")
      this.who = "TEST WHO"
      this.what = "TEST WHAT"
      this.why = "TEST WHY"
      this.acceptance_criteria = "# This is a message"
  }
}
</script>

