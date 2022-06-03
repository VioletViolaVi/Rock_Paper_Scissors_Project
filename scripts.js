document.addEventListener("DOMContentLoaded", () => {
  // from html
  const wholePicGame = document.getElementById("wholePicGame");
  const paraText = document.getElementById("paraText");

  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");
  const selectedImg = document.getElementById("selectedImg");

  const optionArr = [rock, paper, scissors];

  function selectingOptions() {
    // selects btn individually
    optionArr.forEach((chosenBtn) => {
      chosenBtn.addEventListener("click", () => {
        wholePicGame.style.display = "grid"; // shows imgs
        computerChoice(); // shows computer's choice
        paraText.style.display = "none";
        if (chosenBtn.id === "rock") {
          selectedImg.src = "images/rocks.avif";
          selectedImg.alt = "rock picture";
        } else if (chosenBtn.id === "paper") {
          selectedImg.src = "images/paper.avif";
          selectedImg.alt = "paper picture";
        } else if (chosenBtn.id === "scissors") {
          selectedImg.src = "images/scissors.avif";
          selectedImg.alt = "scissors picture";
        }
      });
    });
  }
  selectingOptions();

  function computerChoice() {
    const compImgOptions = [
      "images/rocks.avif",
      "images/paper.avif",
      "images/scissors.avif",
    ];
    const compAltOptions = [
      "rock picture",
      "paper picture",
      "scissors picture",
    ];
    const randNum = Math.floor(Math.random() * 3);
    console.log(compImgOptions[randNum]);
    console.log(compAltOptions[randNum]);
  }
  computerChoice();
});

// may need while loop to cont. playing
// have model appear to show score each time
// randomise computer choices
// modal for "you win" & "you lose"
// - can include score if wanted
