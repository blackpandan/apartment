<srcipt setup>

</srcipt>

<template>
  <footer class="footer">
    <div class="footer__upper">
    <div class="footer__about">
      <h3 class="text--subheader headingText footer__text--orange">About</h3>
      <p class="text-normal">We go the extra mile to ensure 💯 hospitality and comfort to give you value for your money (De Doms we dominate )</p>
      <br>
      <p>Services we render</p>
      <p>Serviced apartment(doms apartment)</p>
      <p>Interior decoration ( doms interior )</p>
      <p>Property sales (doms property)</p> 
      <p>Tanker rentals and supplies(doms oil and gas)</p>
      <br>
      <p>We are De Doms global🥂</p>
      <br>
    </div>
    <div class="footer__nav">
      <p class="text--subheader headingText footer__text--orange">Pages</p>
      <a href="/" class="footer__nav-link">home</a>
      <!-- <a href="/about" class="footer__nav-link">about</a> -->
    </div>
    </div>
    <div class="footer__links">
      <a href="https://www.facebook.com/dedomsapartment" target="blank" class="footer__links-link"><i class="fa-brands fa-facebook footer__links-icon"></i></a>
      <a href="https://twitter.com/DeApartments" target="blank" class="footer__links-link"><i class="fa-brands fa-twitter footer__links-icon"></i></a>
      <a href="https://www.instagram.com/de_doms_apartment/" target="blank" class="footer__links-link"><i class="fa-brands fa-instagram footer__links-icon"></i></a>
    </div>
    <p class="footer__copyright">No 10 platinum street, off platinum way, adjacent Eros hotel and suite jakunde, 1st gate off lekki epe express way lagos island.</p>
    <p class="footer__copyright">telephone: 08164648411</p>
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
    padding: 0 10vmin 0 10vmin;
    text-align: center;
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
    column-gap: 2.5vw;
    color: blue;
      color: var(--color-footer-icon); 

      &-link{
        color: inherit;

        &:hover{
          color: var(--color-orange);
        }
      }

    &-icon{
      font-size: calc(1.3em + 2vmin);
    }
  }

  &__copyright{
    padding: 1em 10vmin 0 10vmin;
    color: var(--color-footer-icon);

    &:nth-of-type(1), &:nth-of-type(2){
      color: inherit;
    }
  }

  &__text{
    &--orange{
      color: var(--color-orange); 
    }
  }
}
</style>
