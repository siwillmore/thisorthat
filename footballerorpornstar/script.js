const questions = [
  "1. Andean Cock-of-the-rock",
  "2. Smelly plonker",
  "3. Dickcissel",
  "4. Satanic goatsucker",
  "5. Shrub-haired scrote",
  "6. Red-rumped bush-tyrant",
  "7. Rough-faced shag",
  "8. Dangling fanny",
  "9. Penduline tit",
  "10. Gobble cock",
  "11. Twite",
  "12. Fluffy-backed tit-babbler",
  "13. Spangled drongo",
  "14. Perplexing scrubwren",
  "15. Horrendous white hawk"
];

const correctAnswers = [
  "bird",
  "bs",
  "bird",
  "bird",
  "bs",
  "bird",
  "bird",
  "bs",
  "bird",
  "bs",
  "bird",
  "bird",
  "bird",
  "bird",
  "bs"
];

const questionContainer = document.getElementById("question-container");
const btnFruit = document.getElementById("btn-bird");
const btnVegetable = document.getElementById("btn-bs");
const scoreContainer = document.getElementById("score-container");

let currentQuestionIndex = 0;
let score = 0;
let maxScore = 0;

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionContainer.innerHTML = question;
}

function showScore() {
  scoreContainer.innerHTML = `You have ${score} out of a possible ${maxScore}`;
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    alert("Congratulations, you have finished the game!");
    return;
  }7
  showQuestion();
}

function handleAnswer(answer) {
  const isCorrect = answer === correctAnswers[currentQuestionIndex];
  maxScore++;
  if (isCorrect) {
    score++;
    alert("Correct!");
  } else {
    alert("Sorry, that is incorrect.");
  }
  showNextQuestion();
  showScore();
}

btnFruit.addEventListener("click", function() {
  handleAnswer("bird");
});

btnVegetable.addEventListener("click", function() {
handleAnswer("bs");
});

showQuestion();
showScore();
