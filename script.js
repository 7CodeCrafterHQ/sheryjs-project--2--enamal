// locomotive
const scroller = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})

gsap.registerPlugin(ScrollTrigger)


gsap.from("nav a , nav h3" ,{
     y:10,
     duration:.5,
     stagger:.2,
     ease:Power2,
     opacity:0
})
Shery.textAnimate("#page1-part2 #text h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
