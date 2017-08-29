'use strict';
var userChoice = [];
var num = 0;
function removeForm(event){
  event.preventDefault();
// Used to pull answers from Dog Info
  // answer1 = event.target.getElementsByTagName('input').ques1.value;
  document.getElementById(formIDs[num]).style.display = 'none';
  if(num < 6){
    render(num, formIDs[num + 1]);
    num++;
  };
}
function render(qnumber, formID){
  var div = document.getElementById('multi');
  var formIn = document.createElement('form');
  formIn.setAttribute('id', formID);
  div.appendChild(formIn);
  var form = document.getElementById(formID);
  var question = dogQuestions[num].question;
  // console.log(question);
  var label = document.createElement('label');
  label.innerHTML = question + '<br>';
  label.setAttribute('id', 'formLabel');
  form.appendChild(label);
  var answers = dogQuestions[qnumber].choices;
  // console.log(answers);

  for ( var j = 0; j < 4; j ++){
      // var inputForm = document.createElement('form');

    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.setAttribute('name','answers');
    label.appendChild(radio);
    label.innerHTML += answers[j] + '<br>';

  }
  var subChoice = document.createElement('button');
  subChoice.type = 'button';
  subChoice.innerHTML = 'submit Answer';
  subChoice.style = 'display: block';
  label.appendChild(subChoice);
  subChoice.addEventListener('click', removeForm);
};
// function addAnotherQuestion(event) {
//   event.preventDefault();
//   var lable = document.getElementById('formLabel').style.display = 'none';
//   // lable.innerHTML = '';
//   num ++;
//   console.log(num);
//
// };
// document.getElementById('formLabel').addEventListener('click', addAnotherQuestion);

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

var formIDs = ['form','form1','form2','form3','form4','form5', 'form6'];
