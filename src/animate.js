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

export {runAnimation};
