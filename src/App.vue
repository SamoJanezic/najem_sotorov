<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Introduction from './components/Introduction.vue'
</script>

<template>
  <header>
    <img alt="Šotorček" class="logo" src="/logo.png" width="125" height="125"/>

    <div class="wrapper">
      <Introduction msg="Najem šotorov Tomaž Vrobl" />

      <nav>
        <RouterLink to="/">Domov</RouterLink>
        <RouterLink to="/about">O Naših šotorih</RouterLink>
        <RouterLink to="/contact">Kontakt</RouterLink>
        <RouterLink to="/additional">Dodatne storitve</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  filter: opacity(0.50) drop-shadow(0 0 0 white);
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: left;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
