'use strict';

function removeForm(event){
  event.preventDefault();
  document.getElementById('form').style.display = 'none';
}
document.getElementById('form').addEventListener('submit',removeForm);

var questions = ['ques1', 'ques2', 'ques3'];
var answers = [[1,2,3], [1,2.3]];
var form = document.getElementById('formOne');
for (var i = 0; i > questions.length; i++){
  var lable = document.createElement('lable');
  lable.innerHtml = questions[i];
  form.appendChild(lable);
  console.log(questions[i]);
  var inputChoice = document.createElement('input');
}
