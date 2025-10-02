const aboutDiv = document.getElementById("about");
const educationDiv = document.getElementById("education");
const skillsDiv = document.getElementById("skills");
const projectsDiv = document.getElementById("projects");
const contactsDiv = document.getElementById("contacts");

const aboutLink = document.querySelector(".about-li");
const educationLink = document.querySelector(".education-li");
const skillsLink = document.querySelector(".skills-li");
const projectsLink = document.querySelector(".projects-li");
const contactsLink = document.querySelector(".contacts-li");

const backButton = document.getElementById("backButton");

backButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const linkMap = {
  about: aboutLink,
  education: educationLink,
  skills: skillsLink,
  projects: projectsLink,
  contacts: contactsLink,
};

function clearActive() {
  Object.values(linkMap).forEach((el) => {
    if (el) el.classList.remove("active");
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries.filter((e) => e.isIntersecting);

    if (visible.length > 0) {
      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const top = visible[0];

      clearActive();

      const link = linkMap[top.target.id];
      console.log(link);
      if (link) link.classList.add("active");
    }
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".box").forEach((el) => {
  observer.observe(el);
});

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > window.innerHeight) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
});

console.log(window.innerHeight);
console.log(document.documentElement.scrollTop);
