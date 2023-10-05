function calculateRemainingTime(questionsCompleted) {
  const totalQuestions = 180;
  const totalMinutes = 230;
  const timePerQuestion = 1 * 60 + 15 ; // 1 minute 20 seconds in seconds

  // Calculate time taken for the questions completed
  const timeTaken = questionsCompleted * timePerQuestion;

  // Calculate remaining time
  const remainingTime = totalMinutes * 60 - timeTaken;

  return {
    minutes: Math.floor(remainingTime / 60),
    seconds: remainingTime % 60
  };
}

const interval = 10;
const resultsList = document.getElementById('results-list');

for (let questionsCompleted = 0; questionsCompleted <= 180; questionsCompleted += interval) {
  const remainingTime = calculateRemainingTime(questionsCompleted);
  
  const resultBox = document.createElement('div');
  resultBox.classList.add('result-box');
  
  const resultText = document.createElement('p');
  resultText.textContent = `Remaining time after ${questionsCompleted} questions: ${remainingTime.minutes} minutes ${remainingTime.seconds} seconds`;
  
  resultBox.appendChild(resultText);
  resultsList.appendChild(resultBox);
}
