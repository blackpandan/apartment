<srcipt setup>

</srcipt>

<template>
  <footer class="footer">
    <div class="footer__upper">
    <div class="footer__about">
      <h3 class="text--subheader headingText footer__text--orange">About</h3>
      <p class="text-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
    <div class="footer__nav">
      <p class="text--subheader headingText footer__text--orange">Pages</p>
      <a href="/" class="footer__nav-link">home</a>
      <a href="/about" class="footer__nav-link">about</a>
    </div>
    </div>
    <div class="footer__links">
      <a href="#" class="footer__links-link"><i class="fa-brands fa-facebook footer__links-icon"></i></a>
      <a href="#" class="footer__links-link"><i class="fa-brands fa-twitter footer__links-icon"></i></a>
      <a href="#" class="footer__links-link"><i class="fa-brands fa-instagram footer__links-icon"></i></a>
    </div>
    <p class="footer__copyright">de-domsglobal 2022 &copy;</p>
  </footer>
</template>

<style lang="scss" scoped>

.footer{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6vh 0 4vh 0;
  color: var(--color-footer-text-mute);
  background-color: var(--color-footer-background-mute);
  
  &__upper{
    width: 100%;
    display: flex;
    flex-direction: column;
//    justify-content: space-around;
    row-gap: 1em;
  }

  &__about{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__nav{
    display: flex;
    flex-direction: column;
    align-items: center;

    &-link{
      color: var(--color-footer-text-mute);
      text-decoration: none;

      &:hover{
        color: var(--color-orange);
      }
    }

  }

  &__links{
    padding: 5vh 1em 0 1em;
    display: flex;
    column-gap: 1vw;
    color: blue;
      color: var(--color-footer-icon); 

      &-link{
        color: inherit;

        &:hover{
          color: var(--color-orange);
        }
      }

    &-icon{
      font-size: calc(1em + 1vmin);
    }
  }

  &__copyright{
    color: var(--color-footer-icon);
  }

  &__text{
    &--orange{
      color: var(--color-orange); 
    }
  }
}
</style>
