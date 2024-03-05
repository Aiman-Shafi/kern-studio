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

if (!isMobileDevice()) {
  teamMembers();
}

Shery.imageEffect(".mask-target", {
  style: 5, //Select Style
});

Shery.makeMagnet(".magnet" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

Shery.imageMasker(".img-text" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "KERN",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function teamMembers() {
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

  let sections = document.querySelectorAll(".fleftelm");
  Shery.imageEffect(".images", {
    style: 4,
    scrollSnapping: true,
    scrollSpeed: 8,
    touchSpeed: 6,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
      sections.forEach(function (section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: function (prog) {
            setScroll(prog.progress + index);
          },
        });
      });
    },
  });

  gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-100%",
    ease: Power1,
  });
}
