<script>
import PostsView from './PostsView.vue'

export default {
  name: 'HomeView',
  components: {
    PostsView
  }
}
</script>

<template>
  <div class="home">
    <h1>Home View</h1>
    <PostsView />
  </div>
</template>
