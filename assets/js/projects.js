const projects = [
    {
        title: "Account Management Subsystem",
        description: "<p>Role: Leader & Full-Stack Software Engineer <br> Skills:  draw.io, SpringBoot, React, Vue 3, mySQL</p>"
    }, 
    {
        title: "3D Pose Estimation Neural Network",
        description: "<p>Role: Research Assistant & Neural Network Developer <br> Skills:  Python, PyTorch, OpenCV, Blender, labelImg</p>"
    },
    {
        title: "TBD",
        description: "<p>TBD</p>"
    },
    {
        title: "TBD",
        description: "<p>TBD</p>"
    }
]

const projectsContainer = document.getElementById("projects-container");
const loadMoreButton = document.getElementById("load-more-btn");
const loadlessButton = document.getElementById("load-less-btn")

let visibleProjects = 2;

function renderProjects() {
  projectsContainer.innerHTML = "";

  for (let i = 0; i < visibleProjects && i < projects.length; i++) {
    const project = projects[i];

    projectsContainer.innerHTML += `
      <div class="card">
        <div class="card-content">
          <span class="project-card-title">${project.title}</span>
          <p>${project.description}</p>
        </div>
      </div>
    `;
  }

  if (visibleProjects >= projects.length) {
    loadMoreButton.style.display = "none";
    loadlessButton.style.display = "block";
  } else {
    loadMoreButton.style.display = "block";
    loadlessButton.style.display = "none";
  }
}

loadMoreButton.addEventListener("click", () => {
    visibleProjects = projects.length;
    renderProjects();
});

loadlessButton.addEventListener(
    "click",
    () => {
        visibleProjects = 2;
        renderProjects();
    }
);

renderProjects();

const themeToggles = document.querySelectorAll(".theme-toggle");

function setTheme(theme) {
  const isDarkMode = theme === "dark";

  document.body.classList.toggle("dark-mode", isDarkMode); // change the body's class(theme)
  // toggle: add or remove the "dark-mode" class based on the `isDarkMode` variable；有则删无则加

  themeToggles.forEach((themeToggle) => {
    themeToggle.innerHTML = isDarkMode
      ? '<i class="fa fa-sun-o" aria-hidden="true"></i>'
      : '<i class="fa fa-moon-o" aria-hidden="true"></i>';
    themeToggle.setAttribute("aria-label", isDarkMode ? "Enable light mode" : "Enable dark mode");
    themeToggle.setAttribute("title", isDarkMode ? "Enable light mode" : "Enable dark mode");
  });
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme || "light");

themeToggles.forEach((themeToggle) => {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
    setTheme(nextTheme);
  });
});