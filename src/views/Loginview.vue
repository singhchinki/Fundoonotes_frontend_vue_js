<template>
    <div class="home">
      <Login></Login>
    </div>
  </template>
  
  <script>
  
import Login from '@/components/Login.vue';
  export default {
    name: 'LoginUI',
    components: {
    Login
}
  }
  </script>