Shery.mouseFollower({
  skew: false,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.4,
});

Shery.makeMagnet(".magnet" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

const tl = gsap.timeline();

tl.from("#about h1", {
  opacity: 0,
  y: 90,
});

tl.from(
  "#about p",
  {
    opacity: 0,
    stagger: 0.1,
    y: 50,
  },
  "anim"
);

tl.from(
  "#about a",
  {
    opacity: 0,
    y: 50,
  },
  "anim"
);
