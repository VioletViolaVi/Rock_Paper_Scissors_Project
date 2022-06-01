document.addEventListener("DOMContentLoaded", () => {
  // from html
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");
  const selectedImg = document.getElementById("selectedImg");

  const optionArr = [rock, paper, scissors];

  function selectingOptions() {
    // selects btns individually
    optionArr.forEach((chosenBtn) => {
      chosenBtn.addEventListener("click", () => {
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
});
