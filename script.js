const questions = [
  {
    question: "Quantos minutos de atividade física são recomendados por semana?",
    options: ["60", "90", "150", "200"],
    answer: 2
  },
  {
    question: "Qual desses alimentos é mais saudável?",
    options: ["Refrigerante", "Frutas", "Salgadinhos", "Doces"],
    answer: 1
  },
  {
    question: "O que significa IMC?",
    options: ["Índice de Massa Corporal", "Índice de Metabolismo Cardíaco", "Ingestão Máxima de Calorias", "Intensidade de Movimento Corporal"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => checkAnswer(index);
    optionsEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

restartBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  nextBtn.style.display = "none";
  showQuestion();
};

showQuestion();
