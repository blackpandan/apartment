<script setup>
  import RoomCard from '../components/RoomCard.vue';
  import Testimonial from '../components/Testimonial.vue';
</script>

<template>
  <main class="main">
    <section class="slideshow">
      <img class="slideshow__image" src="../assets/back2.jpeg" alt="">
      <a href="#" class="slideshow__button">check rooms</a>
    </section>

    <section class="top">
      <div class="top__header">
        <h1 class="headingText text--header">WELCOME TO DE-DOMS</h1>
        <h3 class="text--subheader2">HOME MEETS COMFORT</h3>
      </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero fugit laborum aliquam enim, reprehenderit rem. Consectetur cumque perspiciatis repellendus, veritatis voluptatem ut laboriosam. Aspernatur ipsam tenetur cupiditate id culpa?</p>
    </section>
  

    <section class="rooms">
      <RoomCard v-for="i in 5" :index="i"/>
    </section>

    <Testimonial />
  
  </main>
</template>

<style lang="scss">

.text{
    &--header{
      font-size: calc(1em + 3vmin);
      color: var(--color-orange);
      font-weight: 600;
    }

    &--subheader{
      font-size: calc(1em + 1vmin);

    }

    &--subheader2{
      color: var(--color-subheader2);
      font-size: calc(0.7em + 1vmin);
    }

}

.main{
  
  display: flex;
  flex-direction: column;
  align-items: center;

  .top{
    width: 100%;
    text-align: center;
    padding: 7em 6vw 12vh 6vw;

    &__header{
      padding: 0 0 3em 0;
    }
  }

}

.slideshow{
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 1;
  }


  &__image{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__button{
    background-color: var(--color-orange);
    width: fit-content;
    height: fit-content;
    color: var(--vt-c-white-mute);
    padding: 0.8em 4em 0.8em 4em;
    text-decoration: none;
    border-radius: 0.8em;
    z-index: 2;
    font-size: calc(0.6em + 1vmin);

  }
}

.rooms{
  display: flex;
  flex-direction: column;
  row-gap: 15vh;
  width: 100%;
  padding: 0 6vw 15vh 6vw;
}
@media screen and (max-width: 700px){
  .rooms{
    row-gap: 15vh;
  }
}
</style>
