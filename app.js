'use strict';

//Variable declarations
var allProductImages = [];
var dataArrayNames = [];
var dataArrayVotes = [];
var imageContainer = document.getElementById('image-container');
var left = document.getElementById('left-image');
var center = document.getElementById('center-image');
var right = document.getElementById('right-image');
var viewResults = document.getElementById('viewresults');
var viewChart = document.getElementById('draw-chart');
var votingChart;
var leftIndex;
var centerIndex;
var rightIndex;
var counter = 0;

//Constructor and instances
function Product(imageName, filePath) {
  this.name = imageName;
  this.filePath = filePath;
  this.numberTimesViewed = 0;
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
new Product ('Baby Sweep', 'img/sweep.png');
new Product ('Tauntaun', 'img/tauntaun.jpg');
new Product ('Unicorn', 'img/unicorn.jpg');
new Product ('USB', 'img/usb.gif');
new Product ('Water Can', 'img/water-can.jpg');
new Product ('Wine Glass', 'img/wine-glass.jpg');

//function declarations

function showData() {
  for (var i = 0; i < allProductImages.length; i++) {
    var dataNames = allProductImages[i].name;
    dataArrayNames.push(dataNames);
    var storeClicks = allProductImages[i].numberTimesClicked;
    dataArrayVotes.push(storeClicks);
  }
};

displayPics();

function displayPics() {
  var randomIndex = function() {
    for (var i = 0; i < allProductImages.length; i++) {
      leftIndex = Math.floor(Math.random() * allProductImages.length);
      centerIndex = Math.floor(Math.random() * allProductImages.length);
      rightIndex = Math.floor(Math.random() * allProductImages.length);
    }
  };

  randomIndex();

  //  var totalSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  //  var previousSet = [5, 15, 19];
  //
  // function calcNewPool(totalSet, value) {
  //   for (var i = 0; i < totalSet.length; i++) {
  //     if (value === totalSet[i]) {
  //       totalSet.splice(i, 1);
  //     }
  //   }
  // }
  //
  // calcNewPool();
  //
  // function nextSet(totalSet, previousSet) {
  //   return newSet
  // }

  while (leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex) {
    console.log('duplicate caught');
    randomIndex();
  }

  left.src = allProductImages[leftIndex].filePath;
  center.src = allProductImages[centerIndex].filePath;
  right.src = allProductImages[rightIndex].filePath;

  left.alt = allProductImages[leftIndex].name;
  center.alt = allProductImages[centerIndex].name;
  right.alt = allProductImages[rightIndex].name;

  allProductImages[leftIndex].numberTimesViewed += 1;
  allProductImages[centerIndex].numberTimesViewed += 1;
  allProductImages[rightIndex].numberTimesViewed += 1;
};

//event handlers
function handleUserClick() {
  if(event.target.id === 'image-container') {
    return alert('Click on a picture!');
  }
  if (counter < 25) {
    onclick = counter++;
    console.log(counter);
    displayPics();
  } else {
    imageContainer.removeEventListener('click', handleUserClick);
  }
  for (var i = 0; i < allProductImages.length; i++) {
    if(event.target.alt === allProductImages[i].name) {
      console.log(allProductImages[i].name + ' was clicked.');
      allProductImages[i].numberTimesClicked += 1;
    }
  }
};

function handleDisplayResults() {
  var picList = document.getElementById('pic-list');
  function displayList() {
    picList.innerHTML = '';
    for (var i = 0; i < allProductImages.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = allProductImages[i].name + ' has been clicked ' + allProductImages[i].numberTimesClicked + ' times.';
      picList.appendChild(liEl);
    }
  };
  displayList();
};


//Chart stuff
var data = {
  labels: dataArrayNames,
  datasets: [
    {
      backgroundColor: [
        'lightblue',
        'navy',
        'lightblue',
        'navy',
        'lightblue',
        'navy',
        'lightblue',
        'navy',
        'lightblue',
        'navy',
        'lightblue',
        'navy',
        'lightblue',
        'navy',
        'lightblue',
        'navy',
        'lightblue',
        'navy',
        'lightblue',
        'navy'
      ],
      hoverBackgroundColor: [
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black'
      ],
      data: dataArrayVotes,
    }
  ]
};

function drawChart() {
  showData();
  var ctx = document.getElementById('voting-chart').getContext('2d');
  votingChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false
    },
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 1
        }
      }]
    }
  });
};

//event listeners
imageContainer.addEventListener('click', handleUserClick);
viewResults.addEventListener('click', handleDisplayResults);
viewChart.addEventListener('click', function() {
  drawChart();
});
