import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

//import { function } from '$utils/file';

gsap.from('[is-ball="blue"]', {
  x: '69dvw',
  duration: 2,
  delay: 1,
  stagger: 0.3,
  ease: 'power2.inOut',
  margin: '2rem',
  //yoyo: true,
  //repeat: -1,
  scrollTrigger: {
    markers: false,
    trigger: '[section="2"]',
    scrub: true,
    start: 'top 50%',
    end: 'bottom 50%',
  },
});

/*
window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.to('.ball', { x: '35vw', duration: 1, delay: 0.5, stagger: 0.5 });
});
*/
