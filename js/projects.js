document.querySelector("#menu").addEventListener("click", function (event) {
  event.preventDefault();
  var ml = document.querySelector(".menulist");

  if (ml.classList.contains("active")) {
    ml.classList.remove("active");
  } else {
    ml.classList.add("active");
  }
});
