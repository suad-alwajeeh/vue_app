<script setup >
 import Paginate from "vuejs-paginate-next";
</script>
<template>
  <div class="list row">
    
    <div class="col-md-10">
      <h4>posts List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(post, index) in posts"
          :key="index"
          @click="setActivepost(post, index)"
        >
        <router-link :to="'/posts/' + post.id" class="btn btn-light"> {{ post.title }}</router-link>

        </li>
      </ul>
      <paginate
    :page-count="20"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
  >
  </paginate> 
    </div>
    <div class="col-md-2">
      <router-link :to="'/posts/create'" class="btn btn-primary"> create post</router-link>
    </div>
  </div>
</template>

<script>
import postDataService from "../../services/PostService";


 

export default {
  name: "posts-list",
  data() {
    return {
      posts: [],
      currentPost: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveposts() {
      postDataService.getAll()
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveposts();
      this.currentPost = null;
      this.currentIndex = -1;
    },

    setActivepost(post, index) {
      this.currentPost = post;
      this.currentIndex = post ? index : -1;
    },

  
    
     
  },
  mounted() {
    this.retrieveposts();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 100%;
  margin: auto;
}
</style>
