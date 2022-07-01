<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Bottom from './components/Bottom.vue'
</script>

<template>
  <header class="header">
      <h1 class="headingText logo">De-Doms</h1>
      <nav class="nav">
        <RouterLink to="/" class="link--nav">Home</RouterLink>
        <RouterLink to="/about" class="link--nav">About</RouterLink>
      </nav>
  </header>

  <router-view v-slot="{ Component }">
    <transition name="fade">
        <component :is="Component" />
    </transition>
  </router-view>

  <Bottom />
</template>

<style lang="scss">
@import '@/assets/base.css';

.header{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 12;
  background-color: var(--color-background-mute);
  width: 100%;
  display: flex;
  padding: 1em 1em 1em 1em;
  align-items: center;

  .logo{
    font-size: calc(1em + 1vmin);
    font-weight: bold;
  }

  .nav{
    display: flex;
    column-gap: 2vmin;
    margin: 0 0 0 auto;
    color: var(--color-heading);
  }
}

.headingText{
  font-family: 'Playfair Display', serif;
}


/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
    
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    
}

.router-link-active{
  color: var(--color-text)
}

.router-link-active{
  color: var(--color-text);
}

.link{
  &--nav{
    text-decoration: none;
    color: var(--color-text);
    font-size: 1em;
  }
}
</style>
