function playGame(width, height) {
  let container = document.getElementById("buttonPar");
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let newButton = document.createElement("button");
      newButton.className = "upButton";
      newButton.setAttribute("x", x);
      newButton.setAttribute("y", y);
      newButton.textContext = "X";
      newButton.setAttribute("onClick", "doButtonClicked(this);");
      container.appendChild(newButton);
    }
    let lineBreak = document.createElement("br");
    container.appendChild(lineBreak);
  }
  cheeseX = getRandom(0, width);
  cheeseY = getRandom(0, height);
}

function getRandom(min, max) {
  let range = max - min;
  let result = Math.floor(Math.random() * range) + min;
  return result;
}

function doButtonClicked(button) {
  let x = button.getAttribute("x");
  let y = button.getAttribute("y");
  if (x == cheeseX && y == cheeseY) {
    button.className = "cheeseButton";
    alert("Well done! Reload the page to play again!");
  } else {
    let dx = x - cheeseX;
    let dy = y - cheeseY;
    let distance = Math.round(Math.sqrt(dx * dx + dy * dy));
    button.textContext = distance;
    button.className = "downButton";
  }
}
