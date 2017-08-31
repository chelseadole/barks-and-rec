'use strict';

var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', storeInfo);

function storeInfo(event){
  event.preventDefault();
  // console.log(form.elements['userName'].value);
  // console.log(form.elements['dogName'].value);
  localStorage.setItem('ownerName', form.elements['userName'].value);
  localStorage.setItem('dogName', form.elements['dogName'].value);
  location.assign('pages/quiz.html');
}
