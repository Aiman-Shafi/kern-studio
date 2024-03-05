const tl = gsap.timeline();

function heroAnimation() {
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
    stagger: 0.2,
  });

  tl.to(".loader", {
    display: "none",
  });

  gsap.to(".hero-magic-text", {
    scrollTrigger: {
      trigger: ".hero-magic-text",
      start: "top 50%",
      end: "top 0%",
      scrub: true,
      duration: 5,
    },
    opacity: 1,
    marginTop: "20px",
    scale: 1.2,
  });
}

// About Section Background Change Animation

const aboutBGImgChange = () => {
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

// Checking if the user agent indicates a mobile device
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

//How it works section animation won't be visible at mobile devices
function processScrollingAnimation() {
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
}

function dreamAndContactAnimations() {
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
}

function sherryAnimations() {
  Shery.mouseFollower({
    skew: false,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.4,
  });

  Shery.imageEffect(".mask-target", {
    style: 5,
  });

  Shery.makeMagnet(".magnet", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });

  Shery.imageMasker(".img-text", {
    mouseFollower: true,
    text: "KERN Studio",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

function duplicateInfiniteScrollBox() {
  var aboutInfiniteBox = document.querySelector(".about-infinite-box");

  var aboutInfiniteScrollContainers = document.querySelectorAll(
    ".about-infinite-scroll"
  );

  // Loop through each container to duplicate the div inside it
  aboutInfiniteScrollContainers.forEach(function (container) {
    for (var i = 0; i < 4; i++) {
      // Clone the original about-infinite-scroll
      var clonedInfiniteBox = aboutInfiniteBox.cloneNode(true); // true means deep cloning, including all descendants

      // Append the cloned div to the about-infinite-box
      container.appendChild(clonedInfiniteBox);
    }
  });
}

heroAnimation();
aboutBGImgChange();

// Check if it's not a mobile device, then execute how it works section scrolling animation
if (!isMobileDevice()) {
  processScrollingAnimation();
}

dreamAndContactAnimations();
sherryAnimations();
duplicateInfiniteScrollBox();
