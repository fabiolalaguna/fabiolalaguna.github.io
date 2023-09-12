const headerTitle = document.querySelector(".header-title");

window.addEventListener("load", function (e) {
  console.log("load");

  if (headerTitle.classList.contains("header-title--hidden")) {
    headerTitle.classList.remove("header-title--hidden");
  }
});

// scroll to section 1
const btnScrollTo = document.querySelector(".btn-scroll--to");
const section1ByID = document.getElementById("section-1");

btnScrollTo.addEventListener("click", function (e) {
  const section1Coords = section1ByID.getBoundingClientRect();
  // console.log(section1Coords);

  window.scrollTo({
    left: window.scrollX + section1Coords.left,
    top: window.scrollY + section1Coords.top,
    behavior: "smooth",
  });
});

////////////////
// SECTION 1
const section1 = document.querySelector(".section-description");
const revealSection1 = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    section1.classList.remove("section-hidden");
  }
};

const sectionObserve1 = new IntersectionObserver(revealSection1, {
  root: null,
  threshold: 0,
  rootMargin: "-30px",
});

sectionObserve1.observe(section1);

// SECTION 2
const section2 = document.querySelector(".section-2");

const revealSection = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    section2.classList.remove("section-hidden");
  }
};

const sectionObserve = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
  rootMargin: "-30px",
});

sectionObserve.observe(section2);

const btnSeeMore = document.querySelector(".btn");

const projectBox = document.querySelectorAll(".pb");
const projectSpan = document.querySelector(".option");

btnSeeMore.addEventListener("click", function () {
  projectBox.forEach((pb) => pb.classList.toggle("project-hidden"));

  if (projectSpan.textContent === "Less") {
    projectSpan.textContent = "More";
  } else {
    projectSpan.textContent = "Less";
  }
});

// load lazy img
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // console.log(entry.target);
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserve = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "-200px",
});

imgTargets.forEach((img) => imgObserve.observe(img));

/////////////////
// Viewport
const viewport = section2.getBoundingClientRect();
const imgsProjects = document.querySelectorAll(".img-project");

window.addEventListener("load", function (e) {
  if (viewport.width <= "475") {
    console.log("si");
    // console.log([...imgsProjects]);

    const datas = [...imgsProjects];

    console.log(datas[0]);
    console.log(datas[0].dataset);
    console.log(datas[0].src);

    // console.log(datas[0].dataset.src === datas[0].src);
    datas.forEach((i) => {
      i.src = i.dataset.src;
      i.style.filter = "saturate(10%)";
    });

    imgsProjects.forEach((img) => img.classList.remove("lazy-img"));
  }
});

////////////////
// section 3
const section3 = document.querySelector(".section-3--contact");

const revealSection3 = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    section3.classList.remove("section-hidden--contact");
  }
};

const sectionObserve3 = new IntersectionObserver(revealSection3, {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
});

sectionObserve3.observe(section3);
