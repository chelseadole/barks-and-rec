'use strict';

// Dog constructor object, pushes all completed Dog objects to global builtInDogs array.
function Dog(name, starSign, breed, loc, quizResults) {
  this.name = name;
  this.starSign = starSign;
  this.breed = breed;
  this.loc = loc;
  this.quizResults = quizResults;
  builtInDogs.push(this);
};

// "builtInDogs" is all Dog objects.
// "myDogScores" holds similarity results in order of best match (smallest, smallest-indexed number) to worst match (biggest, largest-indexed number)
var builtInDogs = [];
var myDogScores = [];

// dog we're using for testing. Later this will be input info from form.
var myDog = new Dog('myDog', 'Aries', 'Shiba Inu', 'Code Fellows', [1, 2, 3]);

var Evi = new Dog('Evi', 'Leo', 'German Shepherd', 'Lake City', [3, 4, 4, 1, 3, 1]);
var Daisy = new Dog('Daisy', 'Capricorn', 'Beagle', 'Ballard', [1, 2, 2, 4, 3, 4]);
var Sadie = new Dog('Sadie', 'Cancer', 'Mix (Unknown)', 'Capitol Hill', [3, 3, 2, 2, 1, 4]);
var Robb = new Dog('Robb', 'Aries', 'Australian Shepherd', 'Queen Anne', [4, 4, 3, 1, 1, 2]);
var Zack = new Dog('Zack', 'Scorpio', 'Chihuahua', 'West Seattle', [1, 1, 4, 4, 3, 1]);
var Monchi = new Dog('Monchi', 'Taurus', 'Terrier Mix', 'Edmonds', [2, 3, 3, 1, 4, 3]);
var Bear = new Dog('Bear', 'Aquarius', 'Yellow Lab', 'Bellevue', [2, 4, 3, 1, 2, 1]);
var Mia = new Dog('Mia', 'Libra', 'German Shepherd', 'Renton' [1, 4, 4, 3, 2, 3]);
var Jack = new Dog('Jack', 'Capricorn', 'Boston Terrier', 'Greenlake', [1, 3, 4, 1, 1, 1]);
var Tucker = new Dog('Tucker', 'Scorpio', 'Golden Retriever', 'Bellevue', [4, 1, 2, 3, 4, 2]);
var Bentley = new Dog('Bentley', 'Pisces', 'Black Lab', 'Northgate', [2, 3, 4, 1, 4, 3]);
var Cora = new Dog('Cora', 'Leo', 'Great Dane', 'Downtown Seattle', [1, 2, 3, 4, 2, 1]);
var Coal = new Dog('Coal', 'Cancer', 'Black Lab', 'Greenlake' [2, 4, 1, 3, 3, 3]);
var Chickie = new Dog('Chickie', 'Leo', 'Husky', 'Seatac', [2, 1, 3, 4, 4, 2]);
var Sam = new Dog('Sam', 'Taurus', 'Corgi', 'Pinehurst', [4, 1, 3, 3, 2, 2]);
var Benji = new Dog('Benji', 'Aquarius', 'Shiba Inu', 'Belltown', [3, 4, 4, 1, 2, 1]);
var Spot = new Dog('Spot', 'Virgo', 'Dalmation', 'Montlake Terrace', [2, 1, 4, 4, 1, 2]);
var Fido = new Dog('Fido', 'Aries', 'Cocker Spaniel', 'Queen Anne', [4, 3, 2, 1, 2, 3]);
var Bailey = new Dog('Bailey', 'Cancer', 'Border Collie', 'University District', [4, 3, 1, 4, 3, 2]);
var Buddy = new Dog('Buddy', 'Leo', 'Pug', 'Capitol Hill', [3, 2, 3, 4, 4, 1]);
var Molly = new Dog('Molly', 'Taurus', 'Australian Shepherd', 'SoDo', [1, 2, 4, 3, 4, 1]);

//pushes match scores (from compareDogs) to myDogScores
var makeScores = function() {
  for (var i = 0; i < builtInDogs.length; i++) {
    myDogScores.push(compareDogs(myDog, builtInDogs[i]));
  }
};

//Takes two dogs, and compares how similar their multiple choice answers are. Returns "total" which is a value of how different your dogs are. Smaller = closest match.
var compareDogs = function(dog1, dog2) {
  var total = 0;
  for (var i = 0; i < dog1.quizResults.length; i++) {
    total += Math.abs(dog1.quizResults[i] - dog2.quizResults[i]);
  }
  return total;
};

// sorts the myDogScores from best match to worst. (See line 14 for more info.)
var whichDog = function() {
  myDogScores.sort(function(a, b) {
    return (a - b);
  });
  return myDogScores;
};

var formInfo = function() {
  var form = document.getElementsByTagName('form')[0];
  // use event listener to remove form as follows
  // document.getElementById('form').style.display = "none";
};

formInfo();
