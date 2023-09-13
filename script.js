const menuToggle = document.getElementsByClassName("toggler");
const hamburger = document.getElementsByClassName("hamburger");
const about = document.getElementById("mob-about");
const projects = document.getElementById("mob-projects");
const contact = document.getElementById("mob-contacts");

menuToggle[0].addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

about.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");

  menuToggle[0].checked = false;
});

projects.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");

  menuToggle[0].checked = false;
});

contact.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");

  menuToggle[0].checked = false;
});

const parentElement = document.getElementsByClassName("menu");

function hideParentOnResize() {
  if (window.innerWidth > 992) {
    parentElement[0].style.display = "none";
    hamburger[0].style.display = "none";
    menuToggle[0].checked = false;
  } else {
    parentElement[0].style.display = "block";
    parentElement[0].style.display = "block";
    hamburger[0].style.display = "flex";
  }
}

hideParentOnResize();

window.addEventListener("resize", hideParentOnResize);

document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// window.addEventListener("scroll", reveal);

const blob = document.getElementById("blob");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 10000, fill: "forwards" }
  );
};
