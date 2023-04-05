let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#9f2d55; ">Mexicana, estudiante de mecatronica, ingeniosa, trabajadora, crossfitter. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
