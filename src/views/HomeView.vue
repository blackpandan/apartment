<script setup>
  import RoomCard from '../components/RoomCard.vue';
</script>

<template>
  <main class="main">
    <section class="slideshow">
      <img class="slideshow__image" src="../assets/back.jpeg" alt="">
    </section>

    <section class="top">
      <div class="top__header">
        <h1 class="headingText text--header">WELCOME TO DE-DOMS</h1>
        <h3 class="text--subheader2">HOME MEETS COMFORT</h3>
      </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero fugit laborum aliquam enim, reprehenderit rem. Consectetur cumque perspiciatis repellendus, veritatis voluptatem ut laboriosam. Aspernatur ipsam tenetur cupiditate id culpa?</p>
    </section>
  

    <section class="rooms">
      <RoomCard />
    </section>
  
    <section class="testimonial slideshow">
    <img src="../assets/back.jpeg" class="slideshow__image" alt="">
    <div class="testimonial__texts">
      <p class="testimonial__texts-header">WHAT THE CLIENT SAYS</p>
      <p class="testimonial__texts-normal">this are reviews by our clients</p>
    </div>
    <div>
      <p>clients words</p>
      <p>- client name</p>
    </div>
    </section>
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
      font-size: calc(1em + 1.5vmin);

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
    padding: 7em 3vw 2em 3vw;

    &__header{
      padding: 0 0 3em 0;
    }
  }

}

.slideshow{
  position: relative;
  width: 100%;
  height: 60vh;

  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }


  &__image{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
