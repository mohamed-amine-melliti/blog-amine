<template>
    <div class="loader" v-if="isLoading">
      <img  src="@/assets/loader.gif" alt="Loading..." />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: true
      };
    },
    mounted() {
      // Simulate an asynchronous task (e.g., fetching data)
      setTimeout(() => {
        this.isLoading = false;
      }, 2000); // Adjust the time as needed
    }
  };
  </script>
  
  <style>
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .loader img {
    width: 80vh; /* Adjust the size as needed */
    height: 80vh;
  }
  </style>
  