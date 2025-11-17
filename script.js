const sounds = {
  red: new Audio("sounds/red.mp3"),
  green: new Audio("sounds/green.mp3"),
  blue: new Audio("sounds/blue.mp3"),
  yellow: new Audio("sounds/yellow.mp3"),
  orange: new Audio("sounds/orange.mp3"),
  purple: new Audio("sounds/purple.mp3")
};

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    const id = button.id;
    sounds[id].currentTime = 0; // restart sound
    sounds[id].play();
  });
});
