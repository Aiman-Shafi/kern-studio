Shery.mouseFollower({
  skew: false,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.4,
});

Shery.makeMagnet(".magnet", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

const tl = gsap.timeline();

tl.from("#projects h1", {
  opacity: 0,
  y: 90,
});

// creating a new array of project count
let projectCount = [];
for (let i = 0; i < 13; i++) {
  projectCount.push(i);
}

let plansContainer = document.querySelector(".plans");

// adding project dynamically
projectCount.slice(2).map((project) => {
  plansContainer.innerHTML += `
        
              <a href="/assets/images/projects/${project}.jpg" data-pswp-width="600"
              data-pswp-height="600"> 
                <img
                  src="/assets/images/projects/${project}.jpg"
                  alt="kern project ${project}"
                />
              </a>
        
            `;
});
