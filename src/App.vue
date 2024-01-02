<template>
  <div>
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name:'user'}">Users</router-link>
  </div>
  <router-view />
</template>

<script>
  export default {
    
  }
</script>
<style>
  .router-link-exact-active{
    color: red;
  }
</style>