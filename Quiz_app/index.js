const questions = [
    { question: "What is the capital of France?", choices: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "The world’s nation 5G mobile network was launched by which country?", choices: ["Japan", "South Korea", "Singapore", "Malaysia"], answer: "South Korea" },
    { question: "Where was India’s first national Museum opened?", choices: ["Delhi", "Hyderabad", "Rajasthan", "Mumbai"], answer: "Mumbai" },
    { question: "The green planet in the solar system is?", choices: ["Uranus", "Mars", "Jupiter", "Saturn"], answer: "Uranus" },
    { question: "Which planet is known as the Red Planet?", choices: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "Who invented the light bulb?", choices: ["Albert Einstein", "Nikola Tesla", "Thomas Edison", "Alexander Graham Bell"], answer: "Thomas Edison" },
    { question: "What is the smallest ocean in the world?", choices: ["Indian", "Arctic", "Atlantic", "Pacific"], answer: "Arctic" },
    { question: "Which country is also known as the Land of the Rising Sun?", choices: ["China", "Japan", "Thailand", "South Korea"], answer: "Japan" },
    { question: "What is the hardest natural substance on Earth?", choices: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
    { question: "Who wrote 'Hamlet'?", choices: ["William Wordsworth", "J.K. Rowling", "William Shakespeare", "Mark Twain"], answer: "William Shakespeare" },
    { question: "What is the largest mammal on Earth?", choices: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"], answer: "Blue Whale" },
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
        choice.checked = false;  // Reset any previous selection
        choice.value = question.choices[index];
        labels[index].innerText = question.choices[index];
    });

    // Toggle "Next" and "Submit" buttons based on the question index
    document.getElementById("nextBtn").style.display = (current_score < questions.length - 1) ? "inline-block" : "none";
    document.getElementById("submitBtn").style.display = (current_score === questions.length - 1) ? "inline-block" : "none";
}

function prev() {
    if (current_score > 0) {
        current_score--;
        loadQuestion();
    }
}

function next() {
    checkAnswer();  // Check and update the score before moving to the next question
    if (current_score < questions.length - 1) {
        current_score++;
        loadQuestion();
    }
}

function checkAnswer() {
    const selectedChoice = document.querySelector(".quiz-choice input:checked");
    if (selectedChoice) {
        const userAnswer = selectedChoice.value;
        const correctAnswer = questions[current_score].answer;
        if (userAnswer === correctAnswer) {
            score++;
        }
    }
}

function submit() {
    checkAnswer();  // Final check on the last question

    // Calculate and display the percentage
    const percentage = (score / questions.length) * 100;
    alert(`Quiz completed! Your score is ${score}/${questions.length} and your percentage is: ${percentage.toFixed(2)}%`);
}
