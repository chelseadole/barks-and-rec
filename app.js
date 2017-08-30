'use strict';

// Dog constructor object, pushes all completed Dog objects to global builtInDogs array.
function Dog(name, starSign, breed, loc, picture, quizResults, bio) {
  this.name = name;
  this.starSign = starSign;
  this.breed = breed;
  this.loc = loc;
  this.picture = picture;
  this.quizResults = quizResults;
  this.bio = bio;
  this.dogScore = 0;
  if (this.name != 'MyDog') {
    builtInDogs.push(this);
  }
};

// "builtInDogs" is all Dog objects.
// "myDogScores" holds similarity results in order of best match (smallest, smallest-indexed number) to worst match (biggest, largest-indexed number)
var builtInDogs = [];
var myDogScores = [];

var radioAnswerArray = JSON.parse(localStorage.answersData);
var formAnswerArray = JSON.parse(localStorage.formData);
var myDog = new Dog('MyDog', formAnswerArray[2], formAnswerArray[0], formAnswerArray[1], 'My House', 'img-placeholder', radioAnswerArray, 'bio-placeholder');

// var myDog = new Dog('myDog', 'Leo', 'Shiba Inu', 'Code Fellows', '../dogImgs/mydog.jpg', [3, 2, 2, 2, 1, 3], 'MyDog is our placeholder form dog.');

var Evi = new Dog('Evi', 'Leo', 'German Shepherd', 'Lake City', '../dogImgs/germanshepherd-evi.jpg', [3, 4, 4, 4, 3, 3], 'Evi is a German Shepherd from Lake City. She likes swimming, 30+ minute walks, and her favorite activity is playing tug-of-war with a stick or rope. She is very energetic, likes to play with a large pack of dogs, and gets along best with big dogs.');

var Daisy = new Dog('Daisy', 'Capricorn', 'Beagle', 'Ballard', '../dogImgs/beagle-puppy-4.jpg', [1, 2, 2, 4, 3, 4], 'Daisy is a Beagle from Ballard. She prefers walking over swimming or fetch, 10-20 minute walks, and her favorite activity is playing with multiple toys. She is very energetic, likes to play with a small group of dogs, and gets along with dogs of all sizes.');

var Sadie = new Dog('Sadie', 'Cancer', 'Mix (Unknown)', 'Capitol Hill', '../dogImgs/mixedpuppy.jpg', [3, 3, 2, 2, 1, 4], 'Sadie is a mix from Capitol Hill. She likes swimming, 20-30 minute walks, and her favorite activity is playing with a ball. She is low energy and doesn\'t get along well with all dogs, but prefers medium-sized dogs.');

var Robb = new Dog('Robb', 'Aries', 'Australian Shepherd', 'Queen Anne', '../dogImgs/australian-1.jpg', [4, 4, 3, 4, 4, 2], 'Robb is an Australian Shepherd from Queen Anne. He likes swimming, 30+ minute walks, and his favorite activity is playing tug-of-war with a stick or rope. He is crazy energetic, likes to play with a large pack of dogs, and gets along best with medium-sized dogs.');

var Zack = new Dog('Zack', 'Scorpio', 'Chihuahua', 'Alki', '../dogImgs/Chihuahua_6.jpg', [1, 1, 4, 2, 3, 4], 'Zack is a Chihuahua from Alki. He prefers walking over swimming or fetch, 10-20 minute walks, and his favorite activity is playing with multiple toys. He is a little energetic, likes to play with a small group of dogs, and gets along best with dogs of any size.');

var Monchi = new Dog('Monchi', 'Taurus', 'Terrier', 'Edmonds', '../dogImgs/terriermix.jpg', [2, 3, 2, 1, 3, 3], 'Monchi is an Australian Shepherd from Queen Anne. He likes playing fetch, 20-30 minute walks, and his favorite activity is playing with a ball. He is not energetic, likes to play with a small group of dogs, and gets along best with big dogs.');

var Bear = new Dog('Bear', 'Aquarius', 'Yellow Lab', 'Bellevue', '../dogImgs/yellow-lab.jpg', [2, 4, 3, 1, 2, 1], 'Bear is a Yellow Lab from Bellevue. He likes playing fetch, 30+ minute walks, and his favorite activity is playing tug-of-war with a stick or rope. He is low energy, likes to play with just one other dog, and gets along best with small dogs.');

var Mia = new Dog('Mia', 'Libra', 'German Shepherd', 'Renton', '../dogImgs/germanshepherd.jpg', [1, 4, 4, 3, 2, 3], 'Mia is a German Shepherd from Renton. She prefers walking over swimming or fetch, 30+ minute walks, and his favorite activity is playing with multiple toys. He is very energetic, likes to play with just one other dog, and gets along best with big dogs.');

var Jack = new Dog('Jack', 'Capricorn', 'Boston Terrier', 'Greenlake', '../dogImgs/bostonterrier.jpg', [3, 2, 4, 1, 1, 1], 'Jack is a Boston Terrier from Greenlake. He likes swimming, 10-20 minute walks, and his favorite activity is playing with multiple toys. He is not energetic and doesn\'t get along well with all dogs, but gets along best with small dogs.');

var Tucker = new Dog('Tucker', 'Scorpio', 'Golden Retriever', 'Wedgwood', '../dogImgs/Golden-Retriever_8.jpg', [4, 1, 2, 3, 4, 2], 'Tucker is an Golden Retriever from Wedgwood. He likes socializing with other dogs, 5-10 minute walks, and his favorite activity is playing with a ball. He is very energetic, likes to play with a large pack of dogs, and gets along best with medium-sized dogs.');

var Bentley = new Dog('Bentley', 'Pisces', 'Black Lab', 'Shoreline', '../dogImgs/black-lab.jpg', [3, 4, 1, 1, 4, 3], 'Bentley is a Black Lab from Shoreline. He likes swimming, 30+ minute walks, and his favorite activity is walking or playing without toys. He is not energetic, likes to play with a large pack of dogs, and gets along best with big dogs.');

var Cora = new Dog('Cora', 'Leo', 'Great Dane', 'Downtown Seattle', '../dogImgs/greatdane.jpg', [1, 2, 3, 4, 2, 1], 'Cora is a Great Dane from Downtown Seattle. She prefers walking over swimming or fetch, 10-20 minute walks, and her favorite activity is playing tug-of-war with a stick or rope. She is a little energetic, likes to play with just one other dog, and gets along best with small dogs.');

var Coal = new Dog('Coal', 'Cancer', 'Black Lab', 'Magnolia', '../dogImgs/black-lab.jpg', [4, 4, 1, 3, 3, 4], 'Coal is a Black Lab from Queen Anne. He likes socializing with other dogs, 30+ minute walks, and his favorite activity is walking or playing without toys. He is very energetic, likes to play with a small group of dogs, and gets along best with dogs of any size.');

var Chickie = new Dog('Chickie', 'Leo', 'Husky', 'Seatac', '../dogImgs/husky.jpg', [2, 3, 3, 4, 4, 2], 'Chickie is an Husky from Seatac. She likes playing fetch, 20-30 minute walks, and her favorite activity is playing tug-of-war with a stick or rope. She is crazy energetic, likes to play with a large pack of dogs, and gets along best with medium-sized dogs.');

var Sam = new Dog('Sam', 'Taurus', 'Corgi', 'Ravenna', '../dogImgs/corgi.jpg', [4, 1, 2, 3, 2, 2], 'Sam is a Corgi from Queen Anne. He likes socializing with other dogs, 5-10 minute walks, and his favorite activity is playing with a ball. He is very energetic, likes to play with just one other dog, and gets along best with medium-sized dogs.');

var Benji = new Dog('Benji', 'Aquarius', 'Shiba Inu', 'Montlake', '../dogImgs/shibainu.jpg', [3, 4, 4, 2, 1, 4], 'Benji is a Shiba Inu from Montlake. He likes swimming, 30+ minute walks, and his favorite activity is playing with multiple toys. He is low energy and doesn\'t get along well with all dogs, but gets along with dogs of any size.');

var Spot = new Dog('Spot', 'Virgo', 'Dalmation', 'Eastlake', '../dogImgs/Dalmatian.jpg', [2, 1, 4, 4, 1, 2], 'Spot is a Dalmation from Eastlake. He likes playing fetch, 5-10 minute walks, and his favorite activity is playing with multiple toys. He is crazy energetic and doesn\'t get along well with all dogs, but gets along best with medium-sized dogs.');

var Fido = new Dog('Fido', 'Aries', 'Cocker Spaniel', 'Crown Hill', '../dogImgs/cocker-spaniel.jpg', [4, 3, 2, 1, 2, 4], 'Fido is a Cocker Spaniel from Crown Hill. He likes playing socializing with other dogs, 20-30 minute walks, and his favorite activity is playing with a ball. He is not energetic, likes to play with just one other dog, and gets along with dogs of any size.');

var Bailey = new Dog('Bailey', 'Cancer', 'Border Collie', 'University District', '../dogImgs/border-collie.jpg', [4, 4, 1, 4, 3, 1], 'Bailey is a Border Collie from the University District. He likes socializing with other dogs, 30+ minute walks, and his favorite activity is walking or playing without toys. He is crazy energetic, likes to play with a small group of dogs, and gets along best with small dogs.');

var Buddy = new Dog('Buddy', 'Leo', 'Pug', 'South Lake Union', '../dogImgs/pug.jpg', [3, 2, 3, 4, 4, 1], 'Buddy is a Pug from South Lake Union. He likes swimming, 10-20 minute walks, and his favorite activity is playing tug-of-war with a stick or rope. He is crazy energetic, likes to play with a large pack of dogs, and gets along best with small dogs.');

var Molly = new Dog('Molly', 'Taurus', 'Australian Shepherd', 'Fremont', '../dogImgs/australian-2.jpg', [1, 2, 4, 3, 4, 1], 'Molly is an Australian Shepherd from Fremont. She prefers walking over swimming or fetch, 10-20 minute walks, and his favorite activity is playing with multiple toys. She is very energetic, likes to play with a large pack of dogs, and gets along best with small dogs.');

//pushes match scores (from compareDogs) to myDogScores
var makeScores = function() {
  for (var i = 0; i < builtInDogs.length; i++) {
    compareDogs(myDog, builtInDogs[i]);
    myDogScores.push(builtInDogs[i]);
  }
};

//Takes two dogs, and compares how similar their multiple choice answers are. Returns "total" which is a value of how different your dogs are. Smaller = closest match.
var compareDogs = function(dog1, dog2) {
  for (var i = 0; i < 5; i++) {
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
  localStorage.setItem('dogResults', JSON.stringify(myDogScores));
  appendToResults();
};

var appendToResults = function(){
  var firstH3 = document.getElementById('firstH3');
  firstH3.innerHTML = 'Top Match: ' + myDogScores[0].name;
  var secondH3 = document.getElementById('secondH3');
  secondH3.innerHTML = '2nd Match: ' + myDogScores[1].name;
  var thirdH3 = document.getElementById('thirdH3');
  thirdH3.innerHTML = '3rd Match: ' + myDogScores[2].name;

  var firstpic = document.getElementById('firstPic');
  firstPic.setAttribute('src', myDogScores[0].picture);
  var secondpic = document.getElementById('secondPic');
  secondPic.setAttribute('src', myDogScores[1].picture);
  var thirdpic = document.getElementById('thirdPic');
  thirdPic.setAttribute('src', myDogScores[2].picture);

  var target1 = document.getElementById('firstBio');
  target1.innerHTML = myDogScores[0].bio;
  var target2 = document.getElementById('secondBio');
  target2.innerHTML = myDogScores[1].bio;
  var target3 = document.getElementById('thirdBio');
  target3.innerHTML = myDogScores[2].bio;

  var firstMap = document.getElementById('result1map');
  firstMap.setAttribute('src', dogMap[myDogScores[0].name]);
  var secondMap = document.getElementById('result2map');
  secondMap.setAttribute('src', dogMap[myDogScores[1].name]);
  var thirdMap = document.getElementById('result3map');
  thirdMap.setAttribute('src', dogMap[myDogScores[2].name]);

  var firstLabel = document.getElementById('parkLabel1');
  firstLabel.innerHTML = myDogScores[0].name + '\'s local park:';
  var secondLabel = document.getElementById('parkLabel2');
  secondLabel.innerHTML = myDogScores[1].name + '\'s local park:';
  var thirdLabel = document.getElementById('parkLabel3');
  thirdLabel.innerHTML = myDogScores[2].name + '\'s local park:';
};

var resetArray = function(){
  myDogScores = [];
};

var dogMap = {
  Evi: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27285.095500103685!2d-122.35438254311276!3d47.71753544255073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7159a97e1f40824!2sNorthacres+Spray+Park!5e0!3m2!1sen!2sus!4v1504026387981',
  Daisy: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16910.74332175209!2d-122.38867815091056!3d47.67827309695646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015d39c6c032f%3A0xcfafc6a0b5144bf!2sSalmon+Bay+Park!5e0!3m2!1sen!2sus!4v1504026585582',
  Sadie: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38964.51369992415!2d-122.34970932556524!3d47.63941709624643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549014d913bf3c81%3A0xcc998f649a5cf4f2!2sBoren+Park!5e0!3m2!1sen!2sus!4v1504043824844',
  Robb: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11659.891050829621!2d-122.36881338415357!3d47.64397396693541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901509a631663b%3A0xb8fc9b507a5c1f5!2sDavid+Rodgers+Park!5e0!3m2!1sen!2sus!4v1504026778701',
  Zack: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26724.552931169346!2d-122.40542465377368!3d47.574185262370705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490408bb4215911%3A0x728d9a53673f5292!2sSchmitz+Preserve+Park!5e0!3m2!1sen!2sus!4v1504026978746',
  Monchi: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25748.434352200904!2d-122.39920686250471!3d47.800910535095156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901a572b704fd7%3A0x7415a90b2ef9f768!2sMarina+Beach+Park!5e0!3m2!1sen!2sus!4v1504027076659',
  Bear: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21022.34223059277!2d-122.1935367762392!3d47.60810125911881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c67f8258501%3A0xb2e5d6c34b453b75!2sWilburton+Hill+Park!5e0!3m2!1sen!2sus!4v1504027186444',
  Mia: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34824.078028420365!2d-122.21134096626676!3d47.484634298607624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549067ff40222073%3A0x1d9171dc65b7dac5!2sCedar+River+Trail+Off+Leash+Area!5e0!3m2!1sen!2sus!4v1504027248774',
  Jack: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.91817911985!2d-122.35426807027005!3d47.671455757304514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901445e229d10d%3A0x47023b1427900862!2sLower+Woodland+Off+Leash+Area!5e0!3m2!1sen!2sus!4v1504027337253',
  Tucker: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30059.625325374705!2d-122.28908004566547!3d47.685454332348044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013a79a50a18b%3A0x8443b991a66ab0cb!2sWarren+G.+Magnuson+Park+Off+Leash+Area!5e0!3m2!1sen!2sus!4v1504027470240',
  Bentley: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24574.821507975656!2d-122.32782794115188!3d47.745815289877335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549011a9861f0055%3A0x7f8ff591b3f8d349!2sHamlin+Park!5e0!3m2!1sen!2sus!4v1504027607587',
  Cora: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15165.356527288826!2d-122.35198377511159!3d47.61816756764479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901549b5d4c2ed%3A0xf599c320667bf1ee!2sDenny+Park!5e0!3m2!1sen!2sus!4v1504027695219',
  Coal: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12955.079226222777!2d-122.39725836219976!3d47.65184278021098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490159094587553%3A0x8c7f053c270f04fe!2sMagnolia+Manor+Park!5e0!3m2!1sen!2sus!4v1504027767297',
  Chickie: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31379.837134079015!2d-122.30756563298496!3d47.400764230067814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905bbd59b3aebd%3A0x6cf256e1476bfaa3!2sGrandview+Off-Leash+Dog+Park!5e0!3m2!1sen!2sus!4v1504027829621',
  Sam: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50391.91631787201!2d-122.34088963126166!3d47.668648540355285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490147c9f4bdc19%3A0x63f131e297fc410e!2sRavenna+Park!5e0!3m2!1sen!2sus!4v1504027954851',
  Benji: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27830.145926381145!2d-122.33666954408483!3d47.63170654140233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549014dbbc6bea11%3A0xc4ebffce134cf93e!2sInterlaken+Park!5e0!3m2!1sen!2sus!4v1504028063213',
  Spot: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50462.812250608615!2d-122.34140208995161!3d47.635524323805456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cbf871ebbadc4b4!2sVolunteer+Park!5e0!3m2!1sen!2sus!4v1504028107795',
  Fido: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101248.3046211826!2d-122.45413157038375!3d47.66536194262742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549016648e6062ef%3A0x5b2c838d4c7f0aca!2sGolden+Gardens+Park!5e0!3m2!1sen!2sus!4v1504028249420',
  Bailey: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17749.092504445947!2d-122.32848924257038!3d47.67139440866942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549014653b57db05%3A0xc08da5e2f045a221!2sCowen+Park!5e0!3m2!1sen!2sus!4v1504028372505',
  Buddy: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11188.572118244958!2d-122.34667815141128!3d47.62759170104097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490153bdc42ba65%3A0xc2981a6ccaed5d7d!2sLake+Union+Park!5e0!3m2!1sen!2sus!4v1504028428076',
  Molly: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43108.775032065685!2d-122.37647748714612!3d47.642048574128076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901502b25bb07f%3A0x1e6e55abec496196!2sGas+Works+Park!5e0!3m2!1sen!2sus!4v1504028526850',
};

makeScores();
whichDog();
