'use strict';

function removeForm(event){
  document.getElementById('form').style.display = 'none';
}
document.getElementById('form').addEventListener('submit',removeForm);
