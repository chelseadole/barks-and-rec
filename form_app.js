'use strict';

function removeForm(event){
  event.preventDefault();
  document.getElementById('form').style.display = 'none';
}
document.getElementById('form').addEventListener('submit',removeForm);
