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

tl.from("#projects h1", {
  opacity: 0,
  y: 90,
});

// creating a new array of project count
let projectCount = [];
for (let i = 0; i < 13; i++) {
  projectCount.push(i);
}

let projectContainer = document.querySelector(".project-work ul");

// adding project dynamically
projectCount.slice(2).map((project) => {
  projectContainer.innerHTML += `
           <li>
              <figure>
                <img
                  src="assets/images/projects/${project}.jpg"
                  alt="kern project ${project}"
                />
              </figure>
            </li>
            `;
});

tl.from(".project-work ul li", {
  opacity: 0,
  stagger: 0.1,
  y: 50,
});
