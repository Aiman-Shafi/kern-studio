const tl = gsap.timeline();

tl.from("#hero", {
  overflow: "auto",
});

tl.from("h1", {
  opacity: 0,
  duration: 2,
});

tl.to(".black", {
  top: "-100%",
  duration: 0.5,
  delay: 0.5,
  ease: "expo.out",
});

tl.to(".black", {
  display: "none",
});

tl.from(
  ".yellow",
  {
    top: "100%",
    duration: 0.5,
    delay: 0.6,
    ease: "expo.out",
  },
  "anim"
);

tl.to(
  "h1",
  {
    color: "black",
    zIndex: 99,
    opacity: 0,
  },
  "anim"
);
tl.to("h1", {
  opacity: 1,
  duration: 0.5,
});

tl.from("a", {
  opacity: 0,
  stagger: 0.5,
});

tl.to(".loader", {
  display: "none",
});

gsap.to(".magic-text", {
  scrollTrigger: {
    trigger: ".magic-text",
    start: "top 50%",
    end: "top 0%",
    scrub: true,
    duration: 5,
  },
  opacity: 1,
  marginTop: "20px",
  scale: 1.2,
});

const heroImageMovin = () => {
  document.querySelector("h1").addEventListener("mousemove", (e) => {
    // document.querySelector(".heading img").style.scale = 1;
    document.querySelector(".heading img").style.opacity = "1";
    document.querySelector(".heading img").style.left = e.x - 220 + "px";
    document.querySelector(".heading img").style.top = e.y - 125 + "px";
  });
  document.querySelector("h1").addEventListener("mouseout", () => {
    // document.querySelector(".heading img").style.scale = 1;
    document.querySelector(".heading img").style.opacity = "0";
  });
};

gsap.from(".about-links", {
  scrollTrigger: {
    trigger: ".about-links",
    start: "top 90%",
    end: "top 30%",
    scrub: true,
  },
  opacity: 0,
  y: -90,
  stagger: 0.2,
  duration: 0.5,
});

// About Section Background Change Animation

const aboutBGImgChange = () => {
  document.querySelectorAll(".about-links").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      let image = item.getAttribute("data-img");
      document.querySelector(".about").style.backgroundImage = `url(${image})`;
    });
    item.addEventListener("mouseleave", () => {
      document.querySelector(".about").style.backgroundImage = `url("")`;
    });
  });
};

aboutBGImgChange();

gsap.from(".p", {
  scrollTrigger: {
    trigger: ".p",
    start: "top 90%",
    end: "top 30%",
    scrub: true,
  },
  opacity: 0,
  y: -150,
  stagger: 0.2,
  duration: 0.5,
});

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 3,
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
  y: "-300%",
  ease: Power1,
});

gsap.from(".dreams", {
  scrollTrigger: {
    trigger: ".dreams",
    start: "top 90%",
    end: "top 10%",
    scrub: true,
  },
  opacity: 0,
  backgroundColor: "white",
  duration: 0.8,
});

gsap.from(".dreams h2", {
  scrollTrigger: {
    trigger: ".dreams h2",
    start: "top 90%",
    end: "top 10%",
    scrub: true,
  },
  transform: "scale(0)",
  duration: 0.8,
});

gsap.from(".contact", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 90%",
    end: "top 10%",
    scrub: true,
  },
  opacity: 0,
  backgroundColor: "white",
  duration: 0.8,
});

gsap.from(".contact-container", {
  scrollTrigger: {
    trigger: ".contact-container",
    start: "top 90%",
    end: "top 10%",
    scrub: true,
  },
  y: 200,
  duration: 0.8,
});

gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

Shery.mouseFollower({
  skew: false,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.4,
});

Shery.imageEffect(".mask-target", {
  style: 2, //Select Style
  debug: true, // Debug Panel
  config: {
    /* Config made from debug panel */
  },
});

Shery.makeMagnet(".magnet" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

Shery.imageMasker(".img-text" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Contact",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
