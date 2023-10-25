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
  gsap.from("#page1-part1 , #page1-part2 , #page1-part3",{
y:30,
opacity:0,
duration:1,
ease:Power3,
stagger:.5
  })

  Shery.imageEffect("#page1-part2  img ,#page1-part1 img", {
    style: 3, //Select Style
    // debug: true, // Debug Panel
    config: 
      /* Config made from debug panel */
      {"uFrequencyX":{"value":34.71,"range":[0,100]},"uFrequencyY":{"value":27.27,"range":[0,100]},"uFrequencyZ":{"value":14.88,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8063802083333333},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.79,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

  
    preset: "./presets/wigglewobble.json",
  });
  // Shery.imageEffect("#page1-part1 img",{
  //   style:5,
    
  //   config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.7501875468867217,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.585483870967742},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  // })


  gsap.from("#page1 img",{
    z:"3",
    opacity:0,
    duration: 1,
    ease:Expo.easenInOut
  })

  Shery.imageEffect("#page2 #img1 img, #page2 #img2 img",{
    style:3,
    config:{"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.4666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.89,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })

  Shery.imageEffect("#page3 #images",{
    style:5,
    // debug:true,
    gooey:true,

    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.740408258479887},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.69,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":25}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })
  document.querySelector("#page4 button").addEventListener("mouseover",function(){
   gsap.to("#page4 video",{
    opacity:1,
    duration:1,
    ease:Power4
   })
  })
  document.querySelector("#page4 button").addEventListener("mouseleave",function(){
    gsap.to("#page4 video",{
      opacity:0,
      duration:1,
      ease:Power4
     })
  })