'use strict';

function Dog(name, starSign, breed, loc, quizResults) {
  this.name = name;
  this.starSign = starSign;
  this.breed = breed;
  this.loc = loc;
  this.quizResults = quizResults;
  builtInDogs.push(this);
};

var builtInDogs = [];
var myDogScores = [];

var myDog = new Dog('myDog', 'Aries', 'Shiba Inu', 'Code Fellows', [1, 2, 3]);

var Evi = new Dog('Evi', 'Leo', 'German Shepherd', 'Lake City', [3, 4, 4]);
var Daisy = new Dog('Daisy', 'Capricorn', 'Beagle', 'Ballard', [1, 2, 2]);
var Sadie = new Dog('Sadie', 'Cancer', 'Mix (Unknown)', 'Capitol Hill', [3, 3, 2]);
var Robb = new Dog('Robb', 'Aries', 'Australian Shepherd', 'Queen Anne', [4, 4, 3]);
var Zack = new Dog('Zack', 'Scorpio', 'Black Lab', 'West Seattle', [1, 1, 4]);
var Monchi = new Dog('Monchi', 'Taurus', 'Terrier Mix', 'Edmonds', [2, 3, 3]);

var makeScores = function() {
  for (var i = 0; i < builtInDogs.length; i++) {
    myDogScores.push(compareDogs(myDog, builtInDogs[i]));
  }
};

var compareDogs = function(dog1, dog2) {
  var total = 0;
  for (var i = 0; i < dog1.quizResults.length; i++) {
    total += Math.abs(dog1.quizResults[i] - dog2.quizResults[i]);
  }
  return total;
};

var whichDog = function() {
  myDogScores.sort(function(a, b) {
    return (a - b);
  });
  return myDogScores;
};
