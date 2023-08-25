<script setup> 
import CommunityIcon from '../../components/icons/IconCommunity.vue'
 </script>
<template>
  <div v-if="currentPost" class=" ">
    <div class="row">
      <div class="col-12">
        <h4>post</h4>
      </div>
      <div class="col-8">
        <h4>details</h4>

        <div class="card" style="width: 100%;">
          <div class="card-body">
            <h5 class="card-title">{{ currentPost.title }}</h5>
            <p class="card-text">{{ currentPost.body }}</p>
             <router-link :to="'/posts/' + currentPost.id+'/edit'" class="btn btn-outline-primary">Edit</router-link>

<button type="button"  @click="deletepost" class="btn btn-outline-danger">delete</button>
<router-link to="/posts" class="btn btn-outline-success">back</router-link>
          </div>
        </div>
      </div>
      <div class="col-4 comments ">
        <h4>comments</h4>
        <ul class="list-group">
          <li class="list-group-item" v-for="(comment, index) in comments" :key="index">
            <CommunityIcon />

            <span class="badge bg-success">{{ comment.email }}</span><br/>
            <span class="badge bg-info">{{ comment.name }}</span><br/>
            {{ comment.body }}
          </li>
        </ul>
      </div>
    </div>

    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a post...</p>
  </div>
</template>

<script>
import postDataService from "../../services/PostService";
 
export default {
  name: "post",
  data() {
    return {
      currentPost: null,
      comments: [],
      message: ''
    };
  },
  methods: {
    getpost(id) {
      postDataService.get(id)
        .then(response => {
          this.currentPost = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getpostcomments(id) {
      postDataService.getComments(id)
        .then(response => {
          this.comments = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updatePublished(status) {
      var data = {
        id: this.currentPost.id,
        title: this.currentPost.title,
        body: this.currentPost.body,
        published: status
      };

      postDataService.update(this.currentPost.id, data)
        .then(response => {
          console.log(response.data);
          this.currentPost.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatepost() {
      postDataService.update(this.currentPost.id, this.currentPost)
        .then(response => {
          console.log(response.data);
          this.message = 'The post was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletepost() {
      postDataService.delete(this.currentPost.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getpost(this.$route.params.id);
    this.getpostcomments(this.$route.params.id);
  }
};
</script>

<style>
.comments{
  max-height: 89vh;
background: rgb(230, 229, 229);
overflow: scroll;  
}
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
