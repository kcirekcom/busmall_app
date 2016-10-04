'use strict';

var allProductImages = [];
var imageContainer = document.getElementById('image-container');

function Product(imageName, filePath) {
  this.name = imageName;
  this.filePath = filePath;
  this.numberTimesDisplayed = 0;
  this.numberTimesClicked = 0;
  allProductImages.push(this);
}

new Product ('Bag', 'img/bag_480.jpg');
new Product ('Banana', 'img/banana.jpg');
new Product ('Bathroom', 'img/bathroom.jpg');
new Product ('Boots', 'img/boots.jpg');
new Product ('Breakfast', 'img/breakfast.jpg');
new Product ('Bubblegum', 'img/bubblegum.jpg');
new Product ('Chair', 'img/chair.jpg');
new Product ('Cthulhu', 'img/cthulhu.jpg');
new Product ('Dog Duck', 'img/dog-duck.jpg');
new Product ('Dragon', 'img/dragon.jpg');
new Product ('Pen', 'img/pen.jpg');
new Product ('Pet Sweep', 'img/pet-sweep.jpg');
new Product ('Scissors', 'img/scissors.jpg');
new Product ('Shark', 'img/shark.jpg');
new Product ('Child Sweep', 'img/sweep.png');
new Product ('Tauntaun', 'img/tauntaun.jpg');
new Product ('Unicorn', 'img/unicorn.jpg');
new Product ('USB', 'img/usb.gif');
new Product ('Water Can', 'img/water-can.jpg');
new Product ('Wine Glass', 'img/wine-glass.jpg');

var left = document.getElementById('left-image');
var center = document.getElementById('center-image');
var right = document.getElementById('right-image');

var leftIndex;
var centerIndex;
var rightIndex;
var counter = 0;

render();

function render() {
  var randomIndex = function() {
    for (var i = 0; i < allProductImages.length; i++) {
      leftIndex = Math.floor(Math.random() * allProductImages.length);
      centerIndex = Math.floor(Math.random() * allProductImages.length);
      rightIndex = Math.floor(Math.random() * allProductImages.length);
    }
  };

  randomIndex();

  while (leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex) {
    randomIndex();
  }

  left.src = allProductImages[leftIndex].filePath;
  center.src = allProductImages[centerIndex].filePath;
  right.src = allProductImages[rightIndex].filePath;
};

function handleUserClick() {
  if (counter < 25) {
    onclick = counter++;
    console.log(counter);
    render();
  } else {
    imageContainer.removeEventListener('click', handleUserClick);
  }
  for (var i = 0; i < allProductImages.length; i++) {
    this.numberTimesClicked += 1;
    imageContainer.textContent = this.numberTimesClicked;
    console.log(this.numberTimesClicked);
  }
};

imageContainer.addEventListener('click', handleUserClick);
