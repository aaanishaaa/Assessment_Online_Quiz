const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "The world’s nation 5G mobile network was launched by which country?",
      choices: ["Japan", "South Korea", "Singapore", "Malaysia"],
      answer: "South Korea"
    },
    {
      question: " Where was India’s first national Museum opened?",
      choices: ["Delhi", "Hyderabad", "Rajasthan", "Mumbai"],
      answer: "Mumbai"
    },
    {
        question: " The green planet in the solar system is?",
        choices: ["Uranus", "Mars", "Jupiter", "Saturn"],
        answer: "Uranus"
      },
      {
        question: "The world’s nation 5G mobile network was launched by which country?",
        choices: ["Japan", "South Korea", "Singapore", "Malaysia"],
        answer: "South Korea"
      },
  ];
  let current_score = 0;
  let score = 0;
  window.onload = loadQuestion;
  function loadQuestion() {
    const question = questions[current_score];
    document.querySelector(".quiz-heading").innerText = question.question;
    const choice_list = document.querySelectorAll(".quiz-choice input");
    const labels = document.querySelectorAll(".quiz-choice label");
  
    choice_list.forEach((choice, index) => {
      choice.checked = false; 
      choice.value = question.choices[index];
      labels[index].innerText = question.choices[index];
    });
  }
  function prev() {
    if (current_score > 0) {
      current_score--;
      loadQuestion();
    }
  }
  function next() {
    if (current_score < questions.length - 1) {
      current_score++;
      loadQuestion();
    }
  }
  function submit() {
    const selectedChoice = document.querySelector(".quiz-choice input:checked");
  
    if (selectedChoice) {
      const userAnswer = selectedChoice.value;
      const correctAnswer = questions[current_score].answer;
  
      if (userAnswer === correctAnswer) {
        score++;
      }
     percentage=(score/questions.length)*100
      alert(`Your percentage is: ${percentage}%`);
    } else {
      alert("Please select an answer before submitting!");
    }
  }
  