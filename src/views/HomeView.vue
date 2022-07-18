<script setup>
  import RoomCard from '../components/RoomCard.vue';
  import Testimonial from '../components/Testimonial.vue';
  import { onMounted, ref } from 'vue';
  import { runAnimation } from '../animate.js';
  import { timer, checkActive } from '../slider.js'; 
  import { animateSlides } from '../animate.js';

const listOfDetails = [
  {
    title: "kitchen",
    url: getImageUrl("kitchen", "jpg")
  },
  {
    title: "Bedroom",
    url: getImageUrl("room", "jpg")
  },
  {
    title: "Sitting",
    url: getImageUrl("sitting", "jpg")
  },
  {
    title: "Dinning",
    url: getImageUrl("dinning", "jpg")
  },
]

function getImageUrl(name, ext) {
  return new URL(`../assets/${name}.${ext}`, import.meta.url).href
  
}

let images = ref([
  {
    name: "back2",
    url: getImageUrl("back2", "jpeg")

  },
  {
    name: "back",
    url: getImageUrl("back", "jpeg")
  }
]);

let active = ref(0);
let slides = ref(null);

function check(index){
  let checked = checkActive(index, active);

  checked ? animateSlides(slides) : checked = false;

  return checked;
};


onMounted(()=>{

  timer(active, images); 
  animateSlides(slides);
  runAnimation();


});
</script>

<template>
  <main class="main">
    <section id="slide" class="slideshow">
      <img class="slideshow__image" v-for="(image, index) in images" :id="index" ref="slides" v-show="check(index)" :key="index" :src="image.url" :alt="image.name">
      <h1 id="slideHeader" class="headingText slideshow__header">WELCOME TO DE-DOMS GLOBAL</h1>
      <p id="slideIntro" class="slideshow__intro">We are group of companies that render professional services in 
      Serviced Apartments (doms  apartments),
      Interior design (doms interiors),
      Property sales ( doms properties ),
      Tanker rentals and supplies (doms oil and gas)</p>
      <a href="#roomsHeader" id="slideButton" class="slideshow__button">check rooms</a>
    </section>

    <section class="top">
      <div class="top__header">
        <h1 id="topHeader" class="headingText text--header">DE-DOMS APARTMENT</h1>
        <h2 id="topSub" class="text--subheader2">HOME OF LUXURY AND COMFORT</h2>
      </div>
      <p id="topText">At de-doms apartments we give you nothing but the best serviced apartments deal with our luxurious and state of the art facilities to provide you with top notch comfort .
We go the extra mile to ensure hospital and comfort to give you value for your money.
      </p>
      <br>
      <br>
<h2 class="text--subheader2">
      OUR SERVICES:
</h2>
<p></p>All rooms en-suit, 24/7 power supply, Top notch security, Smart TV, Unlimited WiFi access, Dstv, Cable access, Well fitted kitchen, Washing machine, Modern furnishings, Fully air conditioned, Daily house keeping service, Secure parking space and ON Site maintenance.
<!-- <p>Daily house keeping service</p> --> 
<!-- <p>Secure parking space and</p> -->
<!-- <p>Unlimited WiFi access</p> --> 
<!-- <p>ON Site maintenance</p> -->
<!-- <p>Fully air conditioned</p> -->
<!-- <p>Modern furnishings</p> --> 
<!-- <p>Washing machine</p> --> 
<!-- <p>24/7 power supply</p> -->
<!-- <p>Top notch security</p> --> 
<!-- <p>All rooms en-suit</p> -->
<!-- <p>Cable access</p> --> 
<!-- <p>Smart TV</p> -->
<!-- <p>Dstv</p> --> 
    </section>
  
    <section class="showOff">
      <div class="showOff__box">
     <img class="showOff__one showOff__image" src="../assets/back.jpeg" alt=""> 
     <img class="showOff__two showOff__image" src="../assets/back2.jpeg" alt=""> 
     <img class="showOff__three showOff__image" src="../assets/back.jpeg" alt=""> 
     <img class="showOff__four showOff__image" src="../assets/back2.jpeg" alt=""> 
      </div>
    </section>

    <h3 id="roomsHeader" class="rooms__header headingText">Available Rooms</h3>
    <section id="rooms" class="rooms">
      <RoomCard v-for="detail, index in listOfDetails" :detail="detail" :index="index"/>
    </section>

    <Testimonial />
  
  </main>
</template>

<style lang="scss">

.text{
    &--header{
      font-size: calc(1em + 3vmin);
      // color: var(--color-orange);
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
      padding: 0 0 1vmin 0;
    }
  }

  .showOff{
    width: 90%;
    height: 50vh;
    margin: 0 0 15vh 0;

    &__box{
    display: grid;
    width: 100%;
    height: 100%;
    overflow: hidden;
    grid-template-areas: "one one two two"
                        "one one three four";
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 25vh 25vh;
    gap: 1em 1em;

    }

    &__image{
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    &__one{
      grid-area: one;
    }

    &__two{
      grid-area: two;
    }
    
    &__three{
      grid-area: three;
    }

    &__four{
      grid-area: four;
    }
  }
}

.slideshow{
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;

  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 1;
  }


  &__header{
    color: rgba(240, 240, 240);
    font-size: calc(3em + 1vmin);
    text-align: center;
    z-index: 2;
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
    padding: 0.55em 4em 0.55em 4em;
    text-decoration: none;
    border-radius: 0.6em;
    z-index: 2;
    font-size: calc(0.7em + 1vmin);

    &:hover{
      background-color: darken(rgb(226, 107, 3), 5)
    }

  }

  &__intro{
    color: rgba($color: white, $alpha: 0.8);
    z-index: 2;
    padding: 0 20vw 2em 20vw;
    text-align: center;
    font-size: calc(1em + 1vmin)
  }
  
}

.rooms{
  display: flex;
  flex-direction: column;
  row-gap: 10vh;
  align-items: center;
  width: 85%;
  padding: 0 6vw 15vh 6vw;

  &__header{
    font-size: calc(1em + 1.5vmin);
    margin: 0 0 1em 0;
    font-weight: 500;
  }
}
@media screen and (max-width: 780px){
  .rooms{
    row-gap: 15vh;
  }

  .slideshow{
    &__header{
      padding: 0 5vw 0 5vw;
      font-size: calc(2.5em + 1vmin);
    }
    &__intro{
      padding: 0 5vw 2em 5vw;
    }
  }

  .main{
    .showOff{
      &__box{
        grid-template-areas: "one two"
                             "three four";
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: 20vh 20vh ;

      }
    }
  
  }
}
</style>
