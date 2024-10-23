<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/Navbar.vue'
import Footer_section from './views/Footer.vue'
</script>

<template>
  <navbar/>
  <RouterView/>
  <footer_section/>
</template>

<style lang="scss">
  @use "./css/components/typography";
  @use "./css/sections/navbar";
</style>
