const dialogueBtn = document.getElementById('dialogueBtn');
const dialogueBox = document.getElementById('dialogueBox');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const result = document.getElementById('result');
const nextButton = document.getElementById('nextButton');
const chap4 = document.getElementById('chap4');
const newContent = document.getElementById('newContent');

dialogueBtn.addEventListener('click', function() {
  dialogueBox.style.display = 'block';
});

option1.addEventListener('click', function() {
  result.textContent = 'AMAZING';
  result.classList.add('visible');
  dialogueBox.style.display = 'none';
  nextButton.style.display = 'block';
});

option2.addEventListener('click', function() {
  result.textContent = 'LETS GO!';
  result.classList.add('visible');
  dialogueBox.style.display = 'none';
  nextButton.style.display = 'block';
});

nextButton.addEventListener('click', function() {
  chap4.style.visibility = 'hidden'; 
  newContent.style.display = 'block';
});


document.querySelectorAll(".image-button").forEach(function(button, index) {
  button.addEventListener("click", function() {
    openModal(index);
  });
});

function openModal(index) {
  let modal = document.querySelectorAll(".modal")[index];
  modal.style.display = "block";
}

document.querySelectorAll(".close-button").forEach(function(button) {
  button.addEventListener("click", closeModal);
});

function closeModal() {
  document.querySelectorAll(".modal").forEach(function(modal) {
    modal.style.display = "none";
  });
}

function toggleSound(imageClass) {
  var audioElement = document.getElementById('audio-' + imageClass);
  if (audioElement.paused) {
      audioElement.play();
  } else {
      audioElement.pause();
  }
}






function createDrops() {
  const rain = document.querySelector('.rain');
  const numDrops = 200; // Number of raindrops

  for (let i = 0; i < numDrops; i++) {
      const drop = document.createElement('div');
      drop.classList.add('drop');
      drop.style.left = `${Math.random() * 100}%`; // Randomize horizontal position
      drop.style.animationDuration = `${Math.random() * 2 + 0.5}s`; // Randomize animation duration
      rain.appendChild(drop);
  }
}

createDrops(); // Call the function to create raindrops

// Get the rain switch element
const rainSwitch = document.getElementById('rainSwitch');

// Function to toggle rain effect
function toggleRain() {
    const rain = document.querySelector('.rain');
    if (rain.style.display === 'none') {
        rain.style.display = 'block';
    } else {
        rain.style.display = 'none';
    }
}

// Event listener for rain switch
rainSwitch.addEventListener('change', function() {
    toggleRain();
});




document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("overlayButton");
  const container = document.getElementById("overlayContainer");

  const images = [
    "ppl1.png",
    "ppl2.png",
    "ppl3.png",
    "ppl4.png",
    "ppl5.png"
  ];

  button.addEventListener("click", function() {
    container.innerHTML = ""; // Clear existing images
    const numImages = Math.floor(Math.random() * 40) + 105; // Random number of images (between 5 and 25)
    
    for (let i = 0; i < numImages; i++) {
      setTimeout(function() {
        const img = document.createElement("img");
        const randomImage = images[Math.floor(Math.random() * images.length)];
        img.src = randomImage;
        img.classList.add("overlayImage");
        
        // Random position within the page
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        img.style.left = `${randomX}px`;
        img.style.top = `${randomY}px`;

        if (Math.random() < 0.5) {
          img.style.transform = "scaleX(-1)";
        }
        
        container.appendChild(img);
      }, i * 200); // Adjust the delay here (500 milliseconds in this example)
    }

    container.style.display = "block";
  });

  container.addEventListener("click", function() {
    container.style.display = "none";
  });
});


// Get the construction popup
var constructionPopup = document.getElementById("constructionPopup");
var constructionBtn = document.getElementById("constructionButton");
var constructionClose = document.getElementById("constructionPopup").getElementsByClassName("popup-close")[0];

// Get the traffic popup
var trafficPopup = document.getElementById("trafficPopup");
var trafficBtn = document.getElementById("trafficButton");
var trafficClose = document.getElementById("trafficPopup").getElementsByClassName("popup-close")[0];

// Get the success popup
var successPopup = document.getElementById("successPopup");
var successBtn = document.getElementById("successButton");
var successClose = document.getElementById("successPopup").getElementsByClassName("popup-close")[0];

// Get the start over button
var startOverBtn = document.getElementById("startOverButton");

// When the user clicks the construction button, open the construction popup 
constructionBtn.onclick = function() {
  constructionPopup.style.display = "block";
}

// When the user clicks the traffic button, open the traffic popup 
trafficBtn.onclick = function() {
  trafficPopup.style.display = "block";
}

// When the user clicks the success button, open the success popup 
successBtn.onclick = function() {
  successPopup.style.display = "block";
}

// When the user clicks on construction popup's close button, close the construction popup
constructionClose.onclick = function() {
  constructionPopup.style.display = "none";
}

// When the user clicks on traffic popup's close button, close the traffic popup
trafficClose.onclick = function() {
  trafficPopup.style.display = "none";
}

// When the user clicks on success popup's close button, close the success popup
successClose.onclick = function() {
  successPopup.style.display = "none";
}

const originalContentButton = document.getElementById('originalContentButton');
const originalContent = document.getElementById('chap4');
const Content = document.getElementById('newContent');

originalContentButton.addEventListener('click', function() {
  Content.style.display = 'none';
  originalContent.style.visibility = 'visible';
});


document.getElementById("openPopup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});


const customButton = document.getElementById('customButton');
const customPopup = document.getElementById('customPopup');
const customCloseButton = document.getElementById('customCloseButton');

customButton.addEventListener('click', () => {
    customPopup.style.display = 'block';
});

customCloseButton.addEventListener('click', () => {
    customPopup.style.display = 'none';
});














