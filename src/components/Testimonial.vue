<script setup>
  import { ref, onMounted, nextTick } from 'vue';

    let testimonials = ref([
      {
        name: "faith",
        word: "perfect hotel to stay"
      },
      {
        name: "bandolo",
        word: "perfect ito stay"
      }
    ]); 

let active = ref(0);
let weird = null;

function timer(){
  return setInterval(()=>{
    nextTick(()=>{
    if(active.value == (testimonials.value.length - 1)){
      active.value = 0;
    }else{
      active.value++;
    }
    })
  }, 5000)
}

function checkActive(index){
  if(index == active.value) {
    return true;
  }

  return false;
}

function setActive(index){
  clearInterval(weird);
  weird = timer();
  if(active.value != index){
    active.value = index;
  }
}


onMounted(()=>{
  weird = timer();
});

</script>

<template>
    <section class="testimonial">
    <img src="../assets/back2.jpeg" class="testimonial__image" alt="">
    <div class="testimonial__texts">
      <p class="testimonial__texts-header">WHAT THE CLIENT SAYS</p>
      <!-- <p class="testimonial__texts-normal">this are reviews by our clients</p> -->
    </div>
    <div class="testimonial__boxControl">
    <div class="testimonial__box" v-for="(review, index) in testimonials" :key=index v-show="checkActive(index)">
      <p class="testimonial__box-word">{{ review.word }}</p>
      <p class="testimonial__box-name">- {{ review.name }}</p>
    </div>
    <div class="testimonial__box-dots">
      <span :class="['testimonial__box-dot', {'testimonial__box-dotActive': checkActive(n-1)}]" v-for="n in testimonials.length" @click="setActive(n-1)" :data-id="n"></span>
    </div>
    </div>
    </section>
</template>

<style lang="scss" scoped>

.testimonial{
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 5vh;

  &::after{
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

  }

  &__image{
    width: 100%;
    height: 100%;
  position: absolute;
  object-fit: cover;
  }

  &__box{
    background-color: rgba(0, 0, 0, 0.75);
    padding: 1em 2vw 1em 2vw;
    min-width: 50%;
    text-align: center;
    border-radius: 0.5em;
    font-size: 1.2em;

    &Control{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 1em;
    }

    &-word{
      color: var(--vt-c-white-mute); 
    }

    &-name{
      color: var(--vt-c-white-dark);
      // font-style: italic;
    }

    &-dots{
      z-index: 3;
      display: flex;
      column-gap: 1vw;
    }

    &-dot{
      display: flex;
      width: 1.2vmin;
      height: 1.2vmin;
      border-radius: 50%;
      color: blue;
      background-color: darken($color: white, $amount: 40);
      cursor: pointer;

      &:hover{
        background-color: var(--vt-c-white-mute);
      }

      &Active{
        background-color: var(--vt-c-white-mute);
      }
    }
  }

  &__texts{
    color: var(--vt-c-text-dark-1); 
    /*position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);*/
    z-index: 3;
    text-align: center;

    &-header{
      font-size: calc(1em + 2.5vmin);
      font-weight: 300;
    }

    &-normal{
      font-size: calc(0.5em + 1vmin);
      font-weight: 300;
    }
  }

  &__box{
    // position: absolute;
    z-index: 3;
    /*top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);*/
  }
}
</style>
