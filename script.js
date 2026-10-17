// Accessible mobile navigation and small progressive enhancements.
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("is-open");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navToggle.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("is-open");
      navToggle.focus();
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Prevent the unconfigured resume placeholder from jumping to the top of the page.
const resumeLink = document.querySelector(".resume-link");
if (resumeLink) {
  resumeLink.addEventListener("click", (event) => {
    if (resumeLink.getAttribute("href") === "#") {
      event.preventDefault();
      alert("Add your resume PDF to the project folder and update this link before publishing.");
    }
  });
}
