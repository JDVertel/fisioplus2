<template>
    <div id="app">
      <SidebarLayout>
        <router-view></router-view>
      </SidebarLayout>
    </div>
  </template>
  
  <script>
  import './assets/styles.css';
  import SidebarLayout from './layouts/SidebarLayout.vue';
  export default {
    name: "App",
    components: {
      SidebarLayout
    }
  };
  </script>
  
  <style>
  #app {
    min-height: 100vh;
  }
  </style>