let x = 0
let questionStatus = undefined
let questions = [
  {
    question: "What does biodiversity encompass?",
    answers: [
      {
        option: "Only large animals and plants",
        ID: "one"
      },
      {
        option: "Only microorganisms",
        ID: "two"
      },
      {
        option: "All living organisms and their interactions",
        ID: "three"
      },
      {
        option: "Only endangered species",
        ID: "four"
      }
    ],
    correctAnswer: "All living organisms and their interactions"
  },
  {
    question: "How does high biodiversity enhance ecosystem resilience?",
    answers: [
      {
        option: "By increasing the number of predators",
        ID: "one"
      },
      {
        option: "By enabling environments to recover from disturbances and adapt to changes",
        ID: "two"
      },
      {
        option: "By reducing the number of species",
        ID: "three"
      },
      {
        option: "By simplifying food chains",
        ID: "four"
      }
    ],
    correctAnswer: "By enabling environments to recover from disturbances and adapt to changes"
  },
  {
    question: "What are some consequences of biodiversity loss?",
    answers: [
      {
        option: "Improved air quality",
        ID: "one"
      },
      {
        option: "Enhanced soil fertility",
        ID: "two"
      },
      {
        option: "Disruption of entire habitats",
        ID: "three"
      },
      {
        option: "Increased crop production",
        ID: "four"
      }
    ],
    correctAnswer: "Disruption of entire habitats"
  },
  {
    question: "What role do keystone species play in ecosystems?",
    answers: [
      {
        option: "They provide food for all other species",
        ID: "one"
      },
      {
        option: "They have no significant role",
        ID: "two"
      },
      {
        option: "They maintain the structure of an ecosystem",
        ID: "three"
      },
      {
        option: "They are always top predators",
        ID: "four"
      }
    ],
    correctAnswer: "They maintain the structure of an ecosystem"
  },
  {
    question: "What is an example of a community-based conservation project?",
    answers: [
      {
        option: "Building more cities",
        ID: "one"
      },
      {
        option: "Involving local populations in the management and protection of natural resources",
        ID: "two"
      },
      {
        option: "Increasing logging activities",
        ID: "three"
      },
      {
        option: "Hunting endangered species",
        ID: "four"
      }
    ],
    correctAnswer: "Involving local populations in the management and protection of natural resources"
  }
] 
function quiz1() {
  document.querySelector('#Homepage').style.backgroundImage = 'url("https://images.unsplash.com/photo-1554034483-04fda0d3507b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
  document.querySelector('.passage').style.width = '50%'
  document.querySelector('.passage').innerHTML = `
    <div>
      <div class="backOptions">
        <a href="lessons.html" class="back">Back to Lessons</a>
        <a href="one.html" class="back">Back to Passage</a>
      </div>
      <h1 class="question">${x+1}. ${questions[x].question}</h1>
      <div class="answers">
        <button class="answer ${questions[x].answers[0].ID}" onclick="check('${questions[x].answers[0].option}', '${questions[x].answers[0].ID}')">${questions[x].answers[0].option}</button>
        <button class="answer ${questions[x].answers[1].ID}" onclick="check('${questions[x].answers[1].option}', '${questions[x].answers[1].ID}')">${questions[x].answers[1].option}</button>
        <button class="answer ${questions[x].answers[2].ID}" onclick="check('${questions[x].answers[2].option}', '${questions[x].answers[2].ID}')">${questions[x].answers[2].option}</button>
        <button class="answer ${questions[x].answers[3].ID}" onclick="check('${questions[x].answers[3].option}', '${questions[x].answers[3].ID}')">${questions[x].answers[3].option}</button>
        <p class="wrong"></p>
        <button class="next" disabled onclick="nextQuiz()">Next</button>
      </div>
    </div>
  `
}
let score = 0;
let answeredCorrectly = new Array(questions.length).fill('l');

function check(answer, ID) {
  console.log(answer);
  console.log(questions[x].correctAnswer);
  if (answer === questions[x].correctAnswer) {
  // Check if the user hasn't already answered the question correctly
    document.querySelector('.next').removeAttribute('disabled');
    document.querySelector(`.${ID}`).classList.add('green');
    document.querySelector('.wrong').innerHTML = "";
    score++; // Increment the score only if the answer is correct and hasn't been answered correctly before
    answeredCorrectly[x] == 'l' && (answeredCorrectly[x] = true) // Update the answeredCorrectly array to indicate that the question has been answered correctly

    for (let i = 0; i < questions[x].answers.length; i++) {
      if (questions[x].answers[i].ID !== ID) {
        console.log(questions[x].answers[i].ID);
        document.querySelector(`.${questions[x].answers[i].ID}`).setAttribute('disabled', 'true');
      }
    }
  } else {
    document.querySelector(`.${ID}`).classList.add('red');
    document.querySelector('.wrong').innerHTML = "Try Again";
    answeredCorrectly[x] = false; // Update answeredCorrectly to indicate the question was answered incorrectly
  }
}
function displayMessage(scores) {
  if (scores < 7) {
    return 'Better luck next time!'
  } else if (scores >= 7 && scores < 10) {
    return 'Great job! You passed!'
  } else if (scores == 10) {
    return 'Terrific Work! You answered all questions correctly!'
  }
}

function nextQuiz() {
  if (x < questions.length - 1) {
    x += 1;
    quiz1(); // Call quiz1() again to display the next question
    console.log(`list: ${answeredCorrectly}`)

  } else {
    // Calculate the score based on the number of questions answered correctly on the first attempt
    const score = answeredCorrectly.filter(correct => correct).length;
    console.log(answeredCorrectly)

    // Display the score
    document.querySelector('.passage').innerHTML = `
    <div>
      <h1 class="question">You got ${score} out of ${questions.length} questions correct</h1>
      <h2 class="question">${displayMessage(score)}</h2>
      <div class="buttonsContainer">
        <a class="endButtons" href="one.html">Restart</a>
        <a class="endButtons" href="lessons.html">Main Menu</a>
      </div>
    </div>
    `;
  }
}
