<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Bottom from './components/Bottom.vue'
  import { nextTick, onMounted } from 'vue';
  import { ref } from 'vue';

let userTheme = ref("dark")

function setTheme(theme) {
  console.log("happy");
  if(theme == "dark"){
    nextTick(()=>{ document.documentElement.setAttribute("data-theme", "dark")
    userTheme.value = "dark";
    localStorage.setItem("theme", theme);
    })

  }else if(theme == "light"){
    nextTick(()=>{ document.documentElement.setAttribute("data-theme", "light")
    userTheme.value = "light";
    localStorage.setItem("theme", theme);
    })
  }
}

/*function getMediaPreference() {
  const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
    
  ).matches;
  if (hasDarkPreference) {
        document.documentElement.setAttribute("data-theme", "dark")    
        return "dark";
      
  } else {
        document.documentElement.setAttribute("data-theme", "light")    
        return "light";
      
  }
  
};*/

onMounted(()=>{
  let theme = localStorage.getItem("theme")
  if (theme == null){
    setTheme("light");
    localStorage.setItem("theme", "light");
  }else{
    setTheme(theme);
  }
 // const initUserTheme = getMediaPreference();
  // setTheme();
})


</script>

<template>
  <header class="header">
      <h1 class="headingText logo">De-Doms</h1>
      <nav class="nav">
        <!-- <RouterLink to="/" class="link--nav">Home</RouterLink> -->
        <RouterLink to="/about" class="link--nav">About</RouterLink>
          <span v-show="userTheme == 'dark'" @click="setTheme('light')" class="changer">🌙</span>
          <span v-show="userTheme == 'light'" @click="setTheme('dark')" class="changer">☀️</span>
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
  background-color: var(--color-background);
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

.changer{
  cursor: pointer;
}
</style>
