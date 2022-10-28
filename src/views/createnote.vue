<template>
    <div class="home">
      <createnote></createnote>
    </div>
  </template>
  
  <script>
  
import create from '@/components/CreateNotes.vue';
  export default {
    name: 'createUI',
    components: {
    create
}
  }
  </script>