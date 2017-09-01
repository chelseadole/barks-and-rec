'use strict';
var userChoice = [];
var num = 0;
var userInput = [];

function removeForm(event){
  event.preventDefault();

  var answerOne = document.getElementById('ques1').value;
  userInput.push(answerOne);
  var answerTwo = document.getElementById('ques2').value;
  userInput.push(answerTwo);
  var answerThree = document.getElementById('ques3').value;
  userInput.push(answerThree);
  var json = JSON.stringify(userInput);
  localStorage.setItem('formData', json);

  document.getElementById(formIDs[num]).style.display = 'none';
  if(num < 6){
    render(num, formIDs[num + 1], buttonLabels[num]);
  }
  else{
    location.assign('resultsPage.html');
  }
  num++;
}

function render(qnumber, formID, buttonLabels){
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

  for ( var j = 0; j < 4; j ++){
      // var inputForm = document.createElement('form');

    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.setAttribute('name','answers');
    radio.setAttribute('class', buttonLabels);
    label.appendChild(radio);
    label.innerHTML += answers[j] + '<br>';
  }

  var subChoice = document.createElement('button');
  subChoice.type = 'button';
  subChoice.innerHTML = 'Submit';
  subChoice.style = 'display: block';
  label.appendChild(subChoice);
  subChoice.addEventListener('click', removeForm);
  subChoice.addEventListener('click', function (){
    for(var i = 0; i < 4; i ++){
      var currentButton = document.getElementsByClassName(buttonLabels)[i];
      if(currentButton.checked){
        userChoice.push(i + 1);
      }
    }
    var myJSON = JSON.stringify(userChoice);
    localStorage.setItem('answersData', myJSON);
  });
};

document.getElementById('form').addEventListener('submit',removeForm);

// var one = localStorage.getItem('answersData');
// var obj = JSON.parse(one);

var dogQuestions = [{
  question: 'Which of these activities does your dog like most?',
  choices: ['Just walk', 'Playing fetch', ' Swimming', 'Playing with other dogs']
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
  question:'What sizes of dogs does your dog mesh with best?',
  choices: ['Small dogs only ', 'Medium dogs only', 'Big dogs only', 'Any dog size is okay ']
},
{
  question:'How energetic is your dog?',
  choices: ['Not at all ', 'A little', 'Very energetic', 'Crazy ']
},
{
  question:'What toy does your dog prefer?',
  choices: ['My dog prefers walking or playing without toys', 'A ball is best, something to fetch', 'A stick or rope toy for tug-of-war', 'Multiple toys is best']
},
];

var formIDs = ['form','form1','form2','form3','form4','form5', 'form6'];
var buttonLabels = ['button1','button2','button3','button4','button5','button6'];
