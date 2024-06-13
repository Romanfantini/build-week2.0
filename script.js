const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 60;
let maxCount = 10;



//ho fatto questa funzione per avviare il quiz con la prima domanda e che inizia il timer
function startQuiz() {
  showQuestion(currentQuestionIndex);
  startTimer();
}
//questa function mostra la domanda attuale e genera i button risposte
function showQuestion(index) {
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  let totalAnswers = [];

  questionElement.innerHTML = questions[index].question;
  answersElement.innerHTML = "";
    // creato array di stringhe con tutte le risposte
  let incorrectAnswers = questions[index].incorrect_answers;
    let correctAnswer= questions[index].correct_answer;
//qui ho creato un array con tutte le risposte 
totalAnswers= incorrectAnswers.concat(correctAnswer);

//rende le risposte in ordine random 
totalAnswers = totalAnswers.sort(() => Math.random() -0.5);
// sto cercando di capire come far collegare Button a Correct Answer
totalAnswers.forEach((answer) => {
    const button =document.createElement('button');
    button.innerText=answer;
    answersElement.appendChild(button);
    
    button.addEventListener('click' , () =>{
      if(button.includes(correctAnswer)){
    nextQuestion();
  } else {
    nextQuestion();
  }
    


    })
  }) 

}


/*
 const answers =[incorrectAnswers, correctAnswer]
 //answers = answers.sort(() => Math.random() - 0.5);
console.log(answers)
  answers.forEach((answer) => {
    //creiaamo i bottoni
    const button = document.createElement("button");
    button.classList.add("answer");
    button.innerText = answer;
    
    button.addEventListener("click", () =>
      selectAnswer()
    );
    answersElement.appendChild(button);
  });
}
//prendo la risposta, blocco il timer, la verifico e passo alla prossima
/*function selectAnswer(selectedAnswer, correctAnswer) {
    
  clearInterval(timer);
  if (selectedAnswer !== correctAnswer) {
    wrongAnswersCount++;
  
  }
   nextQuestion()
}*/

//function selectAnswer(){
   // if (answer)
//}
//passo alla domanda dopo o appare un messaggio quando lo completo
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
    timeLeft = 60;
    startTimer();
  } else {
        alert(`Hai completato il quiz! il tuo punteggio è: ${maxCount}`);
  }
}
//aggiorno il timer ogni secondo e passo alla domanda dopo quando scade
function startTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.innerText = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", startQuiz);

//per gestire il codice ho messo le variabili currentQuestionIndex, timer, timerLeft e wrongAnswerCount
