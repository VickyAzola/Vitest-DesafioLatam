<script>
export default {
  name: 'PostsViewVue',
  data() {
    return {
      posts: [
        { id: 1, name: 'Post 1' },
        { id: 2, name: 'Post 2' },
        { id: 3, name: 'Post 3' },
        { id: 4, name: 'Post 4' }
      ]
    }
  }
}
</script>

<template>
  <div class="posts">
    <h1>Vista de Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.posts {
  margin-top: 2rem;
}
</style>