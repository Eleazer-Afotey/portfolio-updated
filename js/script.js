/*
TYPEWRITER EFFECT
used in banner
*/

var app = document.querySelector(".typewriter");

app.style.color = "#0275d8";

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Software Developer")
  .pauseFor(2000)
  .deleteAll()
  .typeString("Web Developer")
  .deleteAll()
  .typeString("Mobile App Developer")
  .pauseFor(2000)
  .start();

/*
  TABLIST FUNCTION
  toggle 
  */

let tablist = document.querySelectorAll(".nav-tabs .nav-item a");

tablist.forEach(function (e) {
  let trigger = new bootstrap.Tab(e);
  e.addEventListener("click", function (e) {
    e.preventDefault();
    trigger.show();
  });
});

/*
PORTFOLIO IMAGES EFFECT
*/

var grid = document.querySelector(".grid");
let iso;

imagesLoaded(grid, function () {
  // Isotope js function
  iso = new Isotope(grid, {
    itemSelector: ".grid-item",
    layoutMode: "masonry",
  });

  var filterEl = document.querySelector(".portfolio-filter");
  filterEl.addEventListener("click", function (event) {
    if (!matchesSelector(event.target, "button")) {
      return;
    }
    var filterValue = event.target.getAttribute("data-filter");
    iso.arrange({
      filter: filterValue,
    });
  });
});

var btnElement = document.querySelectorAll(".fil-btn");
btnElement.forEach(function (el, key) {
  el.addEventListener("click", function () {
    el.classList.add("clicked");

    btnElement.forEach(function (ell, keys) {
      if (key != keys) {
        ell.classList.remove("clicked");
      }
    });
  });
});
