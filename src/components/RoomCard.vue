<script setup>

defineProps({
  index: Number,
  detail: Object
});

function checkType(index){
  if(index % 2 == 0){
    return true;
  }
  return false;
}



</script>

<template>
  <div :class="[
    'card', 
    {
      'oddCard': checkType(index),
      'normalRow': !checkType(index),
    }
    ]" >
    <div class="card__item">
      <img :src="detail.url" alt="" class="card__item card__image">
    </div>
    <div :class="['card__item', 'card__text', {'oddText': checkType(index)}]">
      <h2 class="text--subheader">{{ detail.title }}</h2>
      <p class="card__text-info">{{ detail.description }}</p>
      <br />
    <!-- <div class="card__price"> -->
    <!--   <p class="card__price-tag">&#8358;150000</p> -->
    <!-- </div> -->
    <!-- <br /> -->
    <!--   <a href="https://wa.me/2348164648411?text=hello i want to book a room" target="blank" class="card__text-button">book now</a> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card{
  position: relative;
  width: 100%;
  display: flex;
  height: 350px;
  overflow: hidden;
  justify-content: center;
  background-color: rgba(200, 200, 200, 0.1);
  padding: 1em;
  flex-wrap: no-wrap;
  column-gap: 3vw;

  &__item{
    flex-basis: 50%;
    z-index: 9;
  }

  &__price{
    /*position: absolute;
    top: 50%;
    bottom: 0;
    left: 50%;
    right: 0;
    z-index: 10;*/
    background-color: var(--color-orange);
    padding: 0.3em 0.5em 0.3em 0.5em;
    width: fit-content;
    height: fit-content;
    // transform: translate(-50%, -50%);
    border-radius: 0.4em;

    &-tag{
      color: var(--vt-c-white-soft);
      font-size: calc(0.6em + 1vmin)

    }
  }

  &__image{
    object-fit: cover;
    width: 100%;
    min-width: 300px;
    height: 100%;

    &:hover{
      object-position: top bottom;
    }
  }

  &__text{
    padding: 0 2vw 2em 0;

    &-info{
      color: var(--color-text);
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &-button{
      width: fit-content;
      padding: 0.4em 2em 0.4em 2em;
      border: 1px solid var(--color-orange);
      border-radius: 0.5em;
      cursor: pointer;
      text-decoration: none;
      color: var(--color-text);

      &:hover{
        background-color: var(--color-orange);
        color: var(--vt-c-white-soft);
      }
    }
  }
}

.oddCard{
  flex-direction: row-reverse;
}

.oddText{
  padding: 0 0 0 0;
}

@media screen and (max-width: 1300px){
  .card{
    width: 85%;
  }
}
@media screen and (max-width: 780px){
  .card{
    flex-direction: column;
    height: auto;
    width: fit-content;
    padding-bottom: 2em;

    &__image{
      height: 34vh;
    }

    &__text{
      padding: 0 0 0 0;

      &-info{
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;


      }    
    }
  }
}
</style>
