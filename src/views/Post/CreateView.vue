<template>
    <main>
  <div class="submit-form">
    <div v-if="!submitted">
    <div class="row"> 
       <div class="form-group col-12">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control w-100"
          id="title"
          required
          v-model="post.title"
          name="title"
        />
      </div>

      <div class="form-group col-md-12">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          required
          v-model="post.description"
          name="description"
        ></textarea>
      </div>
    </div>
      <button @click="savePost" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPost">Add</button>
    </div>
  </div>
</main></template>

<script>
import postDataService from "../../services/PostService";

export default {
  name: "add-post",
  data() {
    return {
      post: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    savePost() {
      var data =  
      JSON.stringify({
    title: this.post.title,
    body: this.post.description,
    userId: 1,
  })
      postDataService.create(data)
        .then(response => {
          this.post.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newPost() {
      this.submitted = false;
      this.post = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
