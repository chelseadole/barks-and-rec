'use strict';

function removeForm(event){
  event.preventDefault();
  document.getElementById('form').style.display = 'none';
}
document.getElementById('form').addEventListener('submit',removeForm);

var dogQuestions = [{
  question: "Which of these does your dog likes most?",
  choices: ["Just walk", "Playing fetch", " Swiming", "Playing with other dogs"]
},
{
  question:"What is your dog's ideal walk time?",
  choices: ["5-10 mins ", "10-20 mins", "20-30 mins", "30+ mins "]
}
];
for (var i = 0; i < questions.length; i ++){
  var question = dogQuestions[i].question;
  console.log(question);
  var answers = dogQuestions[i].choices;
  console.log(answers);
}
var form = document.getElementById('formOne');
for (var i = 0; i > questions.length; i++){
  var lable = document.createElement('lable');
  lable.innerHtml = questions[i];
  form.appendChild(lable);
  console.log(questions[i]);
  var inputChoice = document.createElement('input');
}
