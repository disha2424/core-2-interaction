document.addEventListener("DOMContentLoaded", function () {

fetch('https://disha2424.github.io/core-2-interaction/studio/bollywood.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((movie, index) => {

            const movieDiv = document.createElement('div');
            movieDiv.id = `div${index + 1}`;
            movieDiv.innerHTML = `
         
                <p>Name: ${movie.Name}</p>
                <p>Release Date: ${movie.Release_Date}</p>
                <p>Director: ${movie.Director}</p>
                <p>Distributed by: ${movie.Distributed_by}</p>
                <p>Adapted from: ${movie.Adapted_from}</p>
                <p>Writer: ${movie.writter}</p>
                <p>Producer: ${movie.producer}</p>
                <p>Music by: ${movie.Music_by}</p>
                <button onclick="${movie.game}" class="gamebtn">${movie.game2}</button><br>
                <iframe src="${movie.song}" class="song"></iframe>
                <p>Cast: ${movie.cast}</p>
                <p>Plot: ${movie.story}</p>
                <a href="${movie.home_button}" class="link">home</a>
                <img src="${movie.Poster}" class="${movie.Name} Poster">
              

            `;
            
            if (index < 15) {
                if (!document.getElementById('Hollywood')) {
                    const hollywoodDiv = document.createElement('div');
                    hollywoodDiv.id = 'Hollywood';
                    document.body.appendChild(hollywoodDiv);
                }
                document.getElementById('Hollywood').appendChild(movieDiv);
            } else {
                if (!document.getElementById('Bollywood')) {
                    const bollywoodDiv = document.createElement('div');
                    bollywoodDiv.id = 'Bollywood';
                    document.body.appendChild(bollywoodDiv);
                }
                document.getElementById('Bollywood').appendChild(movieDiv);
            }
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

    const contentArea = document.getElementById("contentArea");
    const hollywoodButton = document.getElementById("showContentButton");
    const bollywoodButton = document.getElementById("bollywoodButton");
  
    hollywoodButton.addEventListener("click", function () {
      hollywoodButton.style.display = "none";
      bollywoodButton.style.display = "none";
      contentArea.classList.remove("hidden");
    });
  
    bollywoodButton.addEventListener("click", function () {
      bollywoodButton.style.display = "none";
    });
  });
  
  const playAudioImage = document.getElementById("intro");
  const audio = document.getElementById("audio");

  playAudioImage.addEventListener("click", function() {
    
    audio.play();
    playAudioImage.removeEventListener("click", arguments.callee);
  });



const showBox = document.getElementById('showBox');
const popupBox = document.getElementById('popupBox');
const overlay = document.getElementById('overlay');
const closeBox = document.getElementById('closeBox');


function openBox() {
    popupBox.style.display = 'block';
    overlay.style.display = 'block';
}


function closePopup() {
    popupBox.style.display = 'none';
    overlay.style.display = 'none';
}

showBox.addEventListener('click', openBox);

closeBox.addEventListener('click', closePopup);


var slideIndex1 = 1;
var slideIndex2 = 1;

showSlides(slideIndex1, 1);
showSlides(slideIndex2, 2);

function plusSlides(n, slideshowNumber) {
    if (slideshowNumber === 1) {
        showSlides(slideIndex1 += n, 1);
    } else if (slideshowNumber === 2) {
        showSlides(slideIndex2 += n, 2);
    }
}

function currentSlide(n, slideshowNumber) {
    if (slideshowNumber === 1) {
        showSlides(slideIndex1 = n, 1);
    } else if (slideshowNumber === 2) {
        showSlides(slideIndex2 = n, 2);
    }
}

function showSlides(n, slideshowNumber) {
    var i;
    var slides = document.querySelectorAll('.slideshow-container' + slideshowNumber + ' .slideshow-image');
    if (n > slides.length) { 
        if (slideshowNumber === 1) {
            slideIndex1 = 1;
        } else if (slideshowNumber === 2) {
            slideIndex2 = 1;
        }
    }    
    if (n < 1) { 
        if (slideshowNumber === 1) {
            slideIndex1 = slides.length;
        } else if (slideshowNumber === 2) {
            slideIndex2 = slides.length;
        }
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    if (slideshowNumber === 1) {
        slides[slideIndex1 - 1].style.display = "block";
    } else if (slideshowNumber === 2) {
        slides[slideIndex2 - 1].style.display = "block";
    }
}


function openPopup1() {
    document.getElementById("popup1").style.display = "block";
}

function closePopup1() {
    document.getElementById("popup1").style.display = "none";
}

function openPopup2() {
    document.getElementById("popup2").style.display = "block";
}

function closePopup2() {
    document.getElementById("popup2").style.display = "none";
}
