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

let tablist = document.querySelectorAll(".nav-tabs .nav-item a");

tablist.forEach(function (e) {
  let trigger = new bootstrap.Tab(e);
  e.addEventListener("click", function (e) {
    e.preventDefault();
    trigger.show();
  });
});
