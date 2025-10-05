// Define the checkAnswer function
function checkAnswer() {
    // 1. Identify the Correct Answer
    const correctAnswer = "4";

    // 2. Retrieve the User's Answer
    // Select the checked radio button with the name 'quiz'
    const selectedAnswerElement = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was selected before proceeding
    if (!selectedAnswerElement) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return; // Exit the function if no answer is selected
    }

    const userAnswer = selectedAnswerElement.value;

    // 3. Compare the User's Answer with the Correct Answer
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        // If correct
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        // If incorrect
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// 4. Add an Event Listener to the Submit Button
// Select the submit button by its ID
const submitButton = document.getElementById('submit-answer');

// Add a click event listener to call the checkAnswer function
submitButton.addEventListener('click', checkAnswer);