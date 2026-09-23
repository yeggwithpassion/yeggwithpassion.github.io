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