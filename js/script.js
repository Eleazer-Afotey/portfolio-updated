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
