const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
</head>
    <body>
        <audio id="applause" src="sounds/applause.mp3"></audio>
        <audio id="boo" src="sounds/boo.mp3"></audio>
        <audio id="gasp" src="sounds/gasp.mp3"></audio>
        <audio id="tada" src="sounds/tada.mp3"></audio>
        <audio id="victory" src="sounds/victory.mp3"></audio>
        <audio id="wrong" src="sounds/wrong.mp3"></audio>
    </body>
</html></head>
    <body>
        <audio id="applause" src="sounds/applause.mp3"></audio>
        <audio id="boo" src="sounds/boo.mp3"></audio>
        <audio id="gasp" src="sounds/gasp.mp3"></audio>
        <audio id="tada" src="sounds/tada.mp3"></audio>
        <audio id="victory" src="sounds/victory.mp3"></audio>
        <audio id="wrong" src="sounds/wrong.mp3"></audio>
    </body>
</html></head>
    <body>
        <audio id="applause" src="sounds/applause.mp3"></audio>
        <audio id="boo" src="sounds/boo.mp3"></audio>
        <audio id="gasp" src="sounds/gasp.mp3"></audio>
        <audio id="tada" src="sounds/tada.mp3"></audio>
        <audio id="victory" src="sounds/victory.mp3"></audio>
        <audio id="wrong" src="sounds/wrong.mp3"></audio>
    </body>
</html></head>
    <body>
        <audio id="applause" src="sounds/applause.mp3"></audio>
        <audio id="boo" src="sounds/boo.mp3"></audio>
        <audio id="gasp" src="sounds/gasp.mp3"></audio>
        <audio id="tada" src="sounds/tada.mp3"></audio>
        <audio id="victory" src="sounds/victory.mp3"></audio>
        <audio id="wrong" src="sounds/wrong.mp3"></audio>
    </body>
</html></head>
    <body>
        <audio id="applause" src="sounds/applause.mp3"></audio>
        <audio id="boo" src="sounds/boo.mp3"></audio>
        <audio id="gasp" src="sounds/gasp.mp3"></audio>
        <audio id="tada" src="sounds/tada.mp3"></audio>
        <audio id="victory" src="sounds/victory.mp3"></audio>
        <audio id="wrong" src="sounds/wrong.mp3"></audio>
    </body>
</html></head>
    <body>
        <audio id="applause" src="sounds/applause.mp3"></audio>
        <audio id="boo" src="sounds/boo.mp3"></audio>
        <audio id="gasp" src="sounds/gasp.mp3"></audio>
        <audio id="tada" src="sounds/tada.mp3"></audio>
        <audio id="victory" src="sounds/victory.mp3"></audio>
        <audio id="wrong" src="sounds/wrong.mp3"></audio>
    </body>
</html></head>
    <body>
        <audio id="applause" src="sounds/applause.mp3"></audio>
        <audio id="boo" src="sounds/boo.mp3"></audio>
        <audio id="gasp" src="sounds/gasp.mp3"></audio>
        <audio id="tada" src="sounds/tada.mp3"></audio>
        <audio id="victory" src="sounds/victory.mp3"></audio>
        <audio id="wrong" src="sounds/wrong.mp3"></audio>
    </body>
</html></head>
    <body>
        <audio id="applause" src="sounds/applause.mp3"></audio>
        <audio id="boo" src="sounds/boo.mp3"></audio>
        <audio id="gasp" src="sounds/gasp.mp3"></audio>
        <audio id="tada" src="sounds/tada.mp3"></audio>
        <audio id="victory" src="sounds/victory.mp3"></audio>
        <audio id="wrong" src="sounds/wrong.mp3"></audio>
    </body>
</html></head>
    <body>
        <audio id="applause" src="sounds/applause.mp3"></audio>
        <audio id="boo" src="sounds/boo.mp3"></audio>
        <audio id="gasp" src="sounds/gasp.mp3"></audio>
        <audio id="tada" src="sounds/tada.mp3"></audio>
        <audio id="victory" src="sounds/victory.mp3"></audio>
        <audio id="wrong" src="sounds/wrong.mp3"></audio>
    </body>
</html></head>
    <body>
        <audio id="applause" src="sounds/applause.mp3"></audio>
        <audio id="boo" src="sounds/boo.mp3"></audio>
        <audio id="gasp" src="sounds/gasp.mp3"></audio>
        <audio id="tada" src="sounds/tada.mp3"></audio>
        <audio id="victory" src="sounds/victory.mp3"></audio>
        <audio id="wrong" src="sounds/wrong.mp3"></audio>
    </body>
</html>vvvvvvvv
   if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}   if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}   if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}   if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}
