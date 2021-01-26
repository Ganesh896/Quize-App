"use strict";

const questionAnswer = [
  {
    question: "which is the oldest programmning language?",
    a: "Java",
    b: "Fortran",
    c: "Python",
    d: "C Programming",
    correct: "b",
  },
  {
    question: "javaScript is crated by?",
    a: "John Backus",
    b: "Bjarne Stroustrup",
    c: "Brendan Eich",
    d: "Guido van Rossum",
    correct: "c",
  },
  {
    question: "In which year Python was introduced?",
    a: 1991,
    b: 2001,
    c: 1993,
    d: 1998,
    correct: "a",
  },
  {
    question: "HTML stand for?",
    a: "Hyperloop Markup Language",
    b: "HyperText Markup Language",
    c: "HyperText Makeup Language",
    d: "Horror Make Language",
    correct: "b",
  },
  {
    question: "Who is the CEO of Apple?",
    a: "Tim Cook",
    b: "Sundar Pichai",
    c: "Sundar Pichai",
    d: "Salil Parekh",
    correct: "a",
  },
];

const submitBtn = document.querySelector(".btn");
const questions = document.getElementById("question");
const a_option = document.getElementById("a_option");
const b_option = document.getElementById("b_option");
const c_option = document.getElementById("c_option");
const d_option = document.getElementById("d_option");
const allOptions = document.querySelectorAll(".answer");
const result = document.getElementById("result");

let questionCount = 0;
let score = 0;

quizeSetup();
function quizeSetup() {
  deselect();
  questions.textContent = `${questionAnswer[questionCount].question}`;
  a_option.textContent = `${questionAnswer[questionCount].a}`;
  b_option.textContent = `${questionAnswer[questionCount].b}`;
  c_option.textContent = `${questionAnswer[questionCount].c}`;
  d_option.textContent = `${questionAnswer[questionCount].d}`;
}

function deselect() {
  allOptions.forEach((option) => {
    option.checked = false;
  });
}

const optionSelected = function () {
  let answer = undefined;
  allOptions.forEach((option) => {
    if (option.checked) {
      answer = option.id;
    }
  });
  return answer;
};

submitBtn.addEventListener("click", () => {
  const finalAnswer = optionSelected();

  if (finalAnswer) {
    if (finalAnswer === questionAnswer[questionCount].correct) {
      score++;
    }
    questionCount++;
    if (questionCount < questionAnswer.length) {
      quizeSetup();
    } else {
      if (score === questionAnswer.length) {
        result.innerHTML = `<h1>Very Good😊 Your Score is : ${score}/${questionAnswer.length}</h1>`;
      } else if (score >= questionAnswer.length / 2) {
        result.innerHTML = `<h1>Good😊 Your Score is : ${score}/${questionAnswer.length}</h1>`;
      } else if (score >= questionAnswer.length / 3) {
        result.innerHTML = `<h1>Not bad🙂 Your Score is : ${score}/${questionAnswer.length}</h1>`;
      } else {
        result.innerHTML = `<h1>Poor🤨 Your Score is : ${score}/${questionAnswer.length}</h1>`;
      }
    }
  }
});
