'use strict';

// Dog constructor object, pushes all completed Dog objects to global builtInDogs array.
function Dog(name, starSign, breed, loc, picture, quizResults) {
  this.name = name;
  this.starSign = starSign;
  this.breed = breed;
  this.loc = loc;
  this.picture = picture;
  this.quizResults = quizResults;
  this.dogScore = 0;
  builtInDogs.push(this);
};

// "builtInDogs" is all Dog objects.
// "myDogScores" holds similarity results in order of best match (smallest, smallest-indexed number) to worst match (biggest, largest-indexed number)
var builtInDogs = [];
var myDogScores = [];

// dog we're using for testing. Later this will be input info from form.
var myDog = new Dog('myDog', 'Aries', 'Shiba Inu', 'Code Fellows', [1, 2, 3, 4, 3, 2]);

var Evi = new Dog('Evi', 'Leo', 'German Shepherd', 'Lake City', [3, 4, 4, 1, 3, 1]);
var Daisy = new Dog('Daisy', 'Capricorn', 'Beagle', 'Ballard', '../dogImgs/beagle-puppy-4.jpg', [1, 2, 2, 4, 3, 4]);
var Sadie = new Dog('Sadie', 'Cancer', 'Mix (Unknown)', 'Capitol Hill', '../dogImgs/mixedpuppy.jpg', [3, 3, 2, 2, 1, 4]);
var Robb = new Dog('Robb', 'Aries', 'Australian Shepherd', 'Queen Anne', '../dogImgs/australian-1.jpg', [4, 4, 3, 1, 1, 2]);
var Zack = new Dog('Zack', 'Scorpio', 'Chihuahua', 'West Seattle', '../dogImgs/Chihuahua_6.jpg', [1, 1, 4, 4, 3, 1]);
var Monchi = new Dog('Monchi', 'Taurus', 'Terrier', 'Edmonds', '../dogImgs/terriermix.jpg', [2, 3, 3, 1, 4, 3]);
var Bear = new Dog('Bear', 'Aquarius', 'Yellow Lab', 'Bellevue', '../dogImgs/yellow-lab.jpg', [2, 4, 3, 1, 2, 1]);
var Mia = new Dog('Mia', 'Libra', 'German Shepherd', 'Renton', '../dogImgs/germanshepherd.jpg', [1, 4, 4, 3, 2, 3]);
var Jack = new Dog('Jack', 'Capricorn', 'Boston Terrier', 'Greenlake', '../dogImgs/bostonterrier.jpg', [1, 3, 4, 1, 1, 1]);
var Tucker = new Dog('Tucker', 'Scorpio', 'Golden Retriever', 'Bellevue', '../dogImgs/Golden-Retriever_8.jpg', [4, 1, 2, 3, 4, 2]);
var Bentley = new Dog('Bentley', 'Pisces', 'Black Lab', 'Northgate', '../dogImgs/black-lab.jpg', [2, 3, 4, 1, 4, 3]);
var Cora = new Dog('Cora', 'Leo', 'Great Dane', 'Downtown Seattle', '../dogImgs/greatdane.jpg', [1, 2, 3, 4, 2, 1]);
var Coal = new Dog('Coal', 'Cancer', 'Black Lab', 'Greenlake', '../dogImgs/black-lab.jpg', [2, 4, 1, 3, 3, 3]);
var Chickie = new Dog('Chickie', 'Leo', 'Husky', 'Seatac', '../dogImgs/husky.jpg', [2, 1, 3, 4, 4, 2]);
var Sam = new Dog('Sam', 'Taurus', 'Corgi', 'Pinehurst', '../dogImgs/corgi.jpg', [4, 1, 3, 3, 2, 2]);
var Benji = new Dog('Benji', 'Aquarius', 'Shiba Inu', 'Belltown', '../dogImgs/shibainu.jpg', [3, 4, 4, 1, 2, 1]);
var Spot = new Dog('Spot', 'Virgo', 'Dalmation', 'Montlake Terrace', '../dogImgs/Dalmatian.jpg', [2, 1, 4, 4, 1, 2]);
var Fido = new Dog('Fido', 'Aries', 'Cocker Spaniel', 'Queen Anne', '../dogImgs/cocker-spaniel.jpg', [4, 3, 2, 1, 2, 3]);
var Bailey = new Dog('Bailey', 'Cancer', 'Border Collie', 'University District', '../dogImgs/border-collie.jpg', [4, 3, 1, 4, 3, 2]);
var Buddy = new Dog('Buddy', 'Leo', 'Pug', 'Capitol Hill', '../dogImgs/pug.jpg', [3, 2, 3, 4, 4, 1]);
var Molly = new Dog('Molly', 'Taurus', 'Australian Shepherd', 'SoDo', '../dogImgs/australian-2.jpg', [1, 2, 4, 3, 4, 1]);

//pushes match scores (from compareDogs) to myDogScores
var makeScores = function() {
  for (var i = 0; i < builtInDogs.length; i++) {
    compareDogs(myDog, builtInDogs[i]);
    myDogScores.push(builtInDogs[i]);
  }
};

//Takes two dogs, and compares how similar their multiple choice answers are. Returns "total" which is a value of how different your dogs are. Smaller = closest match.
var compareDogs = function(dog1, dog2) {
  for (var i = 0; i < dog1.quizResults.length; i++) {
    dog2.dogScore += Math.abs(dog1.quizResults[i] - dog2.quizResults[i]);
    if(dog1.starSign === dog2.starSign){
      dog2.dogScore --;
    }
    if(dog1.loc === dog2.loc){
      dog2.dogScore --;
    }
    if(dog1.breed === dog2.breed){
      dog2.dogScore --;
    }
  }
  return dog2.dogScore;
};

// sorts the myDogScores from best match to worst. (See line 14 for more info.)
var whichDog = function() {
  myDogScores.sort(function(a, b) {
    return (a.dogScore - b.dogScore);
  });
  console.log(myDogScores[1].name);
  localStorage.setItem('dogResults', JSON.stringify(myDogScores));
  return myDogScores;
};

var resetArray = function(){
  myDogScores = [];
};
