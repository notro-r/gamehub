function loadGame(url) {
  const frame = document.getElementById("gameFrame");
  const welcome = document.getElementById("welcome");

  welcome.style.display = "none";   // hide welcome text
  frame.style.display = "block";    // show iframe
  frame.src = url;                  // load game
}
