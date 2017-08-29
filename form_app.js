'use strict';

function removeForm(event){
  event.preventDefault();
  debugger;
  answer1 = event.target.getElementsByTagName('input').ques1.value;
  document.getElementById('form').style.display = 'none';
}
document.getElementById('form').addEventListener('submit',removeForm);

var dogQuestions = [{
  question: 'Which of these does your dog likes most?',
  choices: ['Just walk', 'Playing fetch', ' Swiming', 'Playing with other dogs']
},
{
  question:'What is your dog\'s ideal walk time?',
  choices: ['5-10 mins ', '10-20 mins', '20-30 mins', '30+ mins ']
},
{
  question:'How well does your dog get along with other dogs?',
  choices: ['Not very well ', 'Good with one other dog', 'Great with a small group', 'My dog loves being part of a pack! The more the merrier. ']
},
{
  question:'What sizes of dgos does your dog mesh with best?',
  choices: ['Small dogs only ', 'Medium dogs only', 'Big dogs only', 'Any dog size is okay ']
},
{
  question:'How energetic is your dog?',
  choices: ['Not at all ', 'A little', 'Very energetic', 'Crazy ']
},
{
  question:'What toy does your dog like most?',
  choices: ['My dog prefers walking or playing without toys ', 'A ball is best, something to fetch', 'A stick or rope toy for tug-of-war', 'Multiple toys is best ']
},
];
var form = document.getElementById('formOne');
for (var i = 0; i < dogQuestions.length; i ++){
  var question = dogQuestions[i].question;
  console.log(question);
  var label = document.createElement('label');
  label.innerHTML = question + '<br>';
  form.appendChild(label);
  var answers = dogQuestions[i].choices;
  console.log(answers);

  for ( var j = 0; j < 4; j ++){
    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.class = 'rad';
    label.appendChild(radio);
    label.innerHTML += answers[j] + '<br>';

  }
};
