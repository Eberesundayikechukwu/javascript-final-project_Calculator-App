// const questions = [ 
//   {
//     question: "Question 1: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 2: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 3: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 4: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 5: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 6: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 7: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 8: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 9: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 10: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 11: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 12: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 13: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 14: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 15: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 16: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 17: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 18: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 19: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
//   {
//     question: "Question 20: Which country is known as the 'Land of the Rising Sun'?",
//     options: ["China", "Japan", "South Korea"],
//     answer: 1
//   },
  
// ];

// let currentQuestionIndex = 0;
// let score = 0;

// const questionTextElement = document.getElementById('question-text');
// const optionsContainer = document.getElementById('options-container');
// const scoreContainer = document.getElementById('score-container');
// const nextButton = document.getElementById('next-button');
// const retryButton = document.getElementById('retry-button');

// function showQuestion() {
//   const currentQuestion = questions[currentQuestionIndex];
//   questionTextElement.textContent = currentQuestion.question;

//   optionsContainer.innerHTML = '';

//   currentQuestion.options.forEach((option, index) => {
//     const optionButton = document.createElement('button');
//     optionButton.textContent = option;
//     optionButton.onclick = () => selectAnswer(index);
//     optionsContainer.appendChild(optionButton);
//   });
// }

// function selectAnswer(selectedIndex) {
//   const currentQuestion = questions[currentQuestionIndex];

//   if (selectedIndex === currentQuestion.answer) {
//     score++;
//   }

//   disableOptions();
//   showScore();

//   if (currentQuestionIndex === questions.length - 1) {
//     showResults();
//   } else {
//     nextButton.disabled = false;
//   }
// }

// function disableOptions() {
//   const optionButtons = optionsContainer.getElementsByTagName('button');
//   for (let i = 0; i < optionButtons.length; i++) {
//     optionButtons[i].disabled = true;
//   }
// }

// function showScore() {
//   scoreContainer.textContent = `Score: ${score}/${questions.length}`;
// }

// function nextQuestion() {
//   currentQuestionIndex++;
//   showQuestion();
//   nextButton.disabled = true;
// }

// function showResults() {
//   questionTextElement.textContent = 'Quiz Completed!';
//   optionsContainer.innerHTML = '';
//   scoreContainer.textContent = `Final Score: ${score}/${questions.length}`;

//   if (score < (questions.length * 0.7)) {
//     retryButton.style.display = 'inline-block';
//   }
// }

// function retryQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   retryButton.style.display = 'none';
//   showQuestion();
//   showScore();
// }

// // Initial setup
// showQuestion();
// showScore();
// nextButton.disabled = true;
// retryButton.style.display = 'none';


const questions = [
  {
         question: "Question 1: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 2: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 3: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 4: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 5: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 6: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 7: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 8: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 9: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 10: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 11: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 12: Which country is known as the 'Land of the Rising Sun'?",
       options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 13: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 14: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 15: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 16: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 17: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 18: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 19: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
       {
         question: "Question 20: Which country is known as the 'Land of the Rising Sun'?",
         options: ["China", "Japan", "South Korea"],
         answer: 1
       },
   
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const retryButton = document.getElementById('retry-btn');

function loadQuestion() {
  const question = questions[currentQuestion];
  questionContainer.innerText = question.question;
  optionsContainer.innerHTML = '';

  question.options.forEach((option, index) => {
    const optionElement = document.createElement('button');
    optionElement.innerText = option;
    optionElement.addEventListener('click', () => selectOption(index));
    optionsContainer.appendChild(optionElement);
  });

  nextButton.disabled = true;
}

function selectOption(selectedIndex) {
  const question = questions[currentQuestion];
  if (selectedIndex === question.answer) {
    score++;
  }
  const options = optionsContainer.children;
  for (let i = 0; i < options.length; i++) {
    options[i].disabled = true;
    options[i].classList.add('disabled');
  }
  options[selectedIndex].classList.add('selected');

  nextButton.disabled = false;
}

function showNextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionContainer.innerText = '';
  optionsContainer.innerHTML = '';

  const percentage = (score / questions.length) * 100;
  const scoreText = `You scored ${score} out of ${questions.length}. (${percentage.toFixed(2)}%)`;
  scoreContainer.innerText = scoreText;

  if (percentage < 70) {
    retryButton.classList.remove('hidden');
  }
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreContainer.innerText = '';
  retryButton.classList.add('hidden');
  loadQuestion();
}

nextButton.addEventListener('click', showNextQuestion);
retryButton.addEventListener('click', retryQuiz);

loadQuestion();
