<template>
  <div v-if="currentPost" class="edit-form">
    <h4>post</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentPost.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentPost.body"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentPost.published ? "Published" : "Pending" }}
      </div>
    </form>

     
    

    <button class="btn btn-outline-danger mr-2"
      @click="deletepost"
    >
      Delete
    </button>

    <button type="submit" class="btn btn-outline-success"
      @click="updatepost"
    >
      Update
    </button>
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
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
