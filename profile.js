document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.getElementById("logout-button");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const button3 = document.getElementById("button3");
  const button4 = document.getElementById("button4");

  logoutButton.addEventListener("click", function () {
    // Simular cierre de sesión: redirigir a la página de inicio de sesión
    window.location.href = "index.html";
  });

  // Lógica de redirección para los botones adicionales
  button1.addEventListener("click", function () {
    window.location.href = "elphantbet.html";
  });

  button2.addEventListener("click", function () {
    window.location.href = "placard.html";
  });

  button3.addEventListener("click", function () {
    window.location.href = "olabet.html";
  });
  button4.addEventListener("click", function () {
    window.location.href = "bets.html";
  });
  button5.addEventListener("click", function () {
    window.location.href = "way.html";
  });
  
});
  
