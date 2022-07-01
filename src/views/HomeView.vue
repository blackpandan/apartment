<script setup>
  import RoomCard from '../components/RoomCard.vue';
</script>

<template>
  <main class="main">
    <div>
      <img />
    </div>

    <section class="top">
      <h1 class="headingText text--header">WELCOME TO DE-DOMS</h1>
      <h3 class="text--subheader2">HOME MEETS COMFORT</h3>
      <br />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero fugit laborum aliquam enim, reprehenderit rem. Consectetur cumque perspiciatis repellendus, veritatis voluptatem ut laboriosam. Aspernatur ipsam tenetur cupiditate id culpa?</p>
    </section>
  
    <section>

    </section>

    <section class="rooms">
      <RoomCard />
    </section>
  
    <section class="testimonial">

    </section>
  </main>
</template>

<style lang="scss">
.text{
    &--header{
      color: var(--color-heading);
      font-size: calc(1em + 3vmin);
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
  }

}
</style>
