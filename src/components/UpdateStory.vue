<template>
    <div class="container update-story-container">
        <div class="container grid-lg">
            <div class="columns">
                <div class="column col-12">
                    <h1> Update Your User Story With ID {{ $route.params.storyId }}</h1>
                    <UserStoryUpdateForm pwho="TEST WHO" pwhy="TEST WHY" pwhat="mfsanflkdsn" pacceptance_criteria="FDSAFK"></UserStoryUpdateForm>
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
  created: function(storyId) {
      console.log("Update View created, now make get call")
  }
}
</script>

