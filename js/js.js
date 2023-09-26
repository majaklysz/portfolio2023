const hole = document.querySelector(".hole");
const homeSection = document.getElementById("home");

document.body.addEventListener("mouseenter", () => {
  hole.style.display = "block"; // Show the hole when the cursor enters
});

document.addEventListener("mousemove", (e) => {
  // Calculate the position of the hole to center it with the cursor
  const holeWidth = hole.clientWidth;
  const holeHeight = hole.clientHeight;
  const leftOffset = holeWidth / 2;
  const topOffset = holeHeight / 2;

  hole.style.left = e.clientX - leftOffset + "px";
  hole.style.top = e.clientY - topOffset + "px";
});

//scrolling
function scrollProj() {
  secProj.scrollIntoView({ behavior: "smooth" });
  var menulist = document.querySelector(".menulist");
  if (menulist.classList.contains("active")) {
    menulist.classList.remove("active");
  }
}

function scrollHome() {
  home.scrollIntoView({ behavior: "smooth" });
  var menulist = document.querySelector(".menulist");
  if (menulist.classList.contains("active")) {
    menulist.classList.remove("active");
  }
  if ((home.style.display = "none")) {
    scrollHome2();
  }
}

function scrollHome2() {
  home2.scrollIntoView({ behavior: "smooth" });
  var menulist = document.querySelector(".menulist");
  if (menulist.classList.contains("active")) {
    menulist.classList.remove("active");
  }
}

function scrollMe() {
  secMe.scrollIntoView({ behavior: "smooth" });
  var menulist = document.querySelector(".menulist");
  if (menulist.classList.contains("active")) {
    menulist.classList.remove("active");
  }
}

function scrollCon() {
  secCon.scrollIntoView({ behavior: "smooth" });
  var menulist = document.querySelector(".menulist");
  if (menulist.classList.contains("active")) {
    menulist.classList.remove("active");
  }
}

document.querySelector("#menu").addEventListener("click", function (event) {
  event.preventDefault();
  var menulist = document.querySelector(".menulist");

  if (menulist.classList.contains("active")) {
    menulist.classList.remove("active");
  } else {
    menulist.classList.add("active");
  }
});

//nav

const homeTop = document.querySelectorAll("#home2");

const secProj = document.querySelector("#projects");
const navP = document.querySelector(".projects");

const secMe = document.querySelector("#secMe");
const navM = document.querySelector(".aboutMe");

const secCon = document.querySelector(".secCon");
const navC = document.querySelector(".contact");

const nav = document.querySelector("nav");
const home = document.getElementById("home");
const home2 = document.getElementById("home2");
