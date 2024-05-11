<script setup>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import LogoLoader from './views/LogoLoader.vue';

// methods: {
//     // getList() {
//     //   this.axios.get(api).then((response) => {
//     //     console.log(response.data)
//     //   })
//     //   // or
//     //   this.$http.get(api).then((response) => {
//     //     console.log(response.data)
//     //   })
//     // }01
//   }

</script>

<template>
  
  <LogoLoader/>
  <Header/>
  <router-view></router-view>
  <Footer/> 

</template>

