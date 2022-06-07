document.addEventListener("DOMContentLoaded", () => {
  // from html
  const wholePicGame = document.getElementById("wholePicGame");
  const paraText = document.getElementById("paraText");
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");
  const selectedImg = document.getElementById("selectedImg");
  const compSelectedImg = document.getElementById("compSelectedImg");
  const optionArr = [rock, paper, scissors];
  const modalBg = document.getElementById("modalBg");
  const resultsMessage = document.getElementById("resultsMessage");
  const replayBtn = document.getElementById("replayBtn");

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
        setTimeout(() => {
          toggleModal();
        }, 500);
      });
    });
  }
  selectingOptions();

  function toggleModal() {
    if (selectedImg.alt === compSelectedImg.alt) {
      modalBg.style.display = "grid";
      resultsMessage.innerText = "You Won!";
    } else {
      modalBg.style.display = "grid";
      resultsMessage.innerText = "You Lost!";
    }
  }

  // random choices for computer
  function computerChoice() {
    const compSrc = [
      "images/rocks.avif",
      "images/paper.avif",
      "images/scissors.avif",
    ];
    const compAlt = ["rock picture", "paper picture", "scissors picture"];
    const randNum = Math.floor(Math.random() * 3);

    compSelectedImg.src = compSrc[randNum];
    compSelectedImg.alt = compAlt[randNum];
  }
  computerChoice();

  function restartGame() {
    replayBtn.addEventListener("click", () => {
      modalBg.style.display = "none";
    });
  }
  restartGame();
});
