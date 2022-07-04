import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const runAnimation = ()=>{

  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(['#slideHeader', '#slideIntro'], 
    {
      y: 200,
      opacity: 0,
      skewY: 10,
    },
    {
      y: 0,
      opacity: 1,
      skewY: 0,
      duration: 2,
      ease: 'back',
    'scrollTrigger': {
      trigger: "#slideHeader",
      start: "top 75%",
      end: "bottom 25%",
      toggleActions: "play complete restart restart",
    }
},   );

  gsap.fromTo('#slideButton', 
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      delay: 1,
      duration: 1.3,
      ease: 'elastic',
    'scrollTrigger': {
      trigger: "#slideHeader",
      start: "top 75%",
      end: "bottom 25%",
      toggleActions: "play complete restart restart",
      }
    }
  );

  gsap.fromTo(['#topHeader', '#topSub', '#topText'], 
    {
      y: 200,
      opacity: 0,
      skewY: 10,
    },
    {
      y: 0,
      opacity: 1,
      skewY: 0,
      duration: 2,
      ease: 'back',
    'scrollTrigger': {
      trigger: "#topHeader",
      start: "top 55%",
      end: "bottom 95%",
      toggleActions: "restart restart restart restart",
      }
    },   
  );



};


const animateSlides = (slide)=>{
  gsap.fromTo(slide.value, 
    {
      opacity: 0.5
    },
    {
      opacity: 1,
      duration: 4,
    }
  ); 
};

const deanimateSlides = (slide)=>{
  gsap.fromTo(slide.value, 
    {
      opacity: 1
    },
    {
      opacity: 0,
      duration: 4,
    }
  ); 
};

const animateRoom = (id) => {
  gsap.fromTo('.normalRow', 
    {
      xPercent: 50,
      opacity: 0,
      skewY: 10,
    },
    {
      xPercent: 0,
      opacity: 1,
      skewY: 0,
      duration: 2,
      ease: 'elastic',
    'scrollTrigger': {
      trigger: id,
      start: "top 55%",
      end: "bottom 95%",
      markers: true,
      toggleActions: "restart none none none",
      }
    },   
  );

}
export {runAnimation, animateSlides, deanimateSlides, animateRoom};

