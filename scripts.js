document.addEventListener("DOMContentLoaded", () => {
  // from html
  const wholePicGame = document.getElementById("wholePicGame");
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");
  const selectedImg = document.getElementById("selectedImg");

  const optionArr = [rock, paper, scissors];

  function selectingOptions() {
    // selects btn individually
    optionArr.forEach((chosenBtn) => {
      chosenBtn.addEventListener("click", () => {
        if (chosenBtn.id === "rock") {
          selectedImg.src = "images/rocks.avif";
          selectedImg.alt = "rock picture";
          wholePicGame.style.display = "block";
        } else if (chosenBtn.id === "paper") {
          selectedImg.src = "images/paper.avif";
          selectedImg.alt = "paper picture";
          wholePicGame.style.display = "block";
        } else if (chosenBtn.id === "scissors") {
          selectedImg.src = "images/scissors.avif";
          selectedImg.alt = "scissors picture";
          wholePicGame.style.display = "block";
        }
      });
    });
  }
  selectingOptions();
});

// may need while loop to cont. playing
// have model appear to show score each time
