const questions = [
  [" <a href="https://www.youtube.com/watch?v=cv14hwi0QrI">TEST Daily Double!</a>  What is the capital of France?", "Paris"],
  ["2 + 2?", "4"],
  ["What color is the sky?", "Blue"],
  ["What is 5 * 6?", "30"],
  ["Who wrote Hamlet?", "Shakespeare"],
  ["What is H2O?", "Water"],
  ["What planet do we live on?", "Earth"],
  ["Opposite of hot?", "Cold"],
  ["What year is it?", "2025"],
];

const board = document.getElementById("game-board");

questions.forEach((q, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = "$100";
  card.addEventListener("click", () => {
    const userAnswer = prompt(q[0]);
    if (userAnswer && userAnswer.toLowerCase() === q[1].toLowerCase()) {
      card.textContent = "✔️";
    } else {
      card.textContent = "❌";
    }
    card.style.pointerEvents = "none";
  });
  board.appendChild(card);
});
