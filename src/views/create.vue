<template>
    <div class="home">
      <createUI></createUI>
    </div>
  </template>
    
  <script>
  // @ is an alias to /src
  import create from '@/components/CreateNotes.vue'
  export default {
    name: 'CreatingNotes',
    components: {
      create
    }
  }
  </script>