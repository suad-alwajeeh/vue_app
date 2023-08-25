<script setup>
import { RouterLink, RouterView } from 'vue-router'
 import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
</script>

<template>
  <header>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">home</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/posts">posts</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/posts">users</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </header>
   <div class="container mt-3">
      <RouterView />
    </div>
</template>

<style scoped>
 
  
</style>
