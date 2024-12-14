
document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var correctAnswers = {
    q1: "Hyper Text Markup Language",
    q2: "<h1>",
    q3: "<p>",
  };

  let score = 0;

  for (var [question, correctAnswer] of Object.entries(correctAnswers)) {
    var selectedOption = document.querySelector(`input[name="${question}"]:checked`);

    if (selectedOption) {
      var label = selectedOption.parentElement;
      if (selectedOption.nextSibling.textContent.trim() === correctAnswer) {
        score += 10; 
        label.style.backgroundColor = "green"; 
        label.style.color = "white"; 
      } else {
        label.style.backgroundColor = "red"; 
        label.style.color = "white";
      }
    }
  }


  alert(`Your score is ${score} out of ${Object.keys(correctAnswers).length * 10}.`);

  setTimeout(() => {
    window.location.href = "knowledgeChecker.html";
  }, 5000);
});


function knowledgeChecker (){
  window.location.href = "knowledgeChecker.html";  ///window.location.href=     /// returns the href (URL) of the current page  /////(reference:w3school)
}

function startQuiz(){
  window.location.href = "quiz.html";
}
function Home() {
  window.location.href = "petProject.html";
}

function content() {
  window.location.href = "content.html";
}

function level() {
  window.location.href = "level.html";
}

function Module() {
  window.location.href = "module.html";
}

function Glossary() {
  window.location.href = "glossary.html";
}

function intro() {
  window.location.href = "introductionHtml.html";
}
function basic() {
  window.location.href = "basicofHtml.html";
}
function element() {
  window.location.href = "htmlElement.html";
}
